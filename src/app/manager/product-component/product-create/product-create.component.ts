import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {ToastService} from 'ng-uikit-pro-standard';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {createNumberMask} from 'text-mask-addons/dist/textMaskAddons';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
    @ViewChild('errorSwal') private errorSwal: SwalComponent;

    constructor(
        private productService: ProductService,
        private toastrService: ToastService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {
    }

    optionsSelect: Array<any>;
    numberMask = createNumberMask({
        prefix: '',
        suffix: '',
        thousandsSeparatorSymbol: ','
    });
    product: Product = new Product();
    form: FormGroup;

    ngOnInit() {
        this.optionsSelect = [
            {value: -1, label: 'Miễn Thuế'},
            {value: 0, label: '0%'},
            {value: 5, label: '5%'},
            {value: 10, label: '10%'},
        ];
        this.form = this.fb.group({
            Name: new FormControl('', [Validators.required]),
            Code: new FormControl('', [Validators.required]),
            Unit: new FormControl('', [Validators.required]),
            UnitPrice: new FormControl(0, [Validators.required]),
            VATRate: new FormControl(10, Validators.required),
        });
    }

    create() {
        if (this.form.valid) {
            this.productService.createProduct(this.form.value)
                .then(
                    (response) => {
                        this.serverShowSuccess();
                        this.goHome();
                    }
                )
                .catch(
                    (error) => {
                        this.errorSwal.show();
                    }
                );
        } else {
            this.errorSwal.show();
        }
        // const data = Object.assign({}, this.product) as any;
        // data.UnitPrice = (data.UnitPrice).replace(/,/g , '');

    }

    goHome() {
        this.router.navigate(['..'], {relativeTo: this.route});
    }

    serverShowSuccess() {
        this.toastrService.success('Thêm sản phẩm thành công');
    }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { createNumberMask } from 'text-mask-addons';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
}) 
export class ProductEditComponent implements OnInit {
  @ViewChild('errorSwal') private errorSwal: SwalComponent;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly productService: ProductService,
    private toastrService: ToastService,
    private fb: FormBuilder
  ) { }
  product: Product = new Product();
  optionsSelect: Array<any>;
  numberMask = createNumberMask({
    prefix:'',
    suffix:'',
    thousandsSeparatorSymbol: ','
  })
  ngOnInit() {
    this.optionsSelect = [
      { value: -1, label: 'Miễn Thuế' },
      { value: 0, label: '0%' },
      { value: 5, label: '5%' },
      { value: 10, label: '10%' },

    ];
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.productService.getProduct(id)
        .then(
          (response: Product) => {
            this.product = response;
            this.form = this.fb.group({
              Id: new FormControl(this.product.Id),
              Name: new FormControl(this.product.Name, [Validators.required, Validators.minLength(4)]),
              Code: new FormControl(this.product.Code, [Validators.required, Validators.minLength(3)]),
              Unit: new FormControl(this.product.Unit, Validators.required),
              UnitPrice: new FormControl(this.product.UnitPrice, Validators.required),
              VATRate: new FormControl(this.product.VATRate, Validators.required)
            });
          }
        )
        .catch(
          (error) => {
            console.error(error);
          }
        )
    });
  }
  goHome() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
  serverShowSuccess() {
    this.toastrService.success('Sửa sản phẩm thành công');
  }

  update() {
    if (this.form.valid) {
      this.productService.updateProduct(this.form.value)
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
        )
    }
    else {
      this.errorSwal.show();
    }
  }
}

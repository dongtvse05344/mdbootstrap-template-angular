import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Invoice} from '../../models/Invoice';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import {InvoiceItem} from '../../models/InvoiceItem';
import {TemplateService} from 'src/app/manager/services/template.service';
import {ProductService} from 'src/app/manager/services/product.service';
import {Template} from 'src/app/manager/models/template';
import {Product} from 'src/app/manager/models/product';
import {createNumberMask} from 'text-mask-addons';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-invoice-edit',
    templateUrl: './invoice-edit.component.html',
    styleUrls: ['./invoice-edit.component.scss']
})
export class InvoiceEditComponent implements OnInit {

    constructor(
        private readonly invoiceService: InvoiceService,
        private route: ActivatedRoute,
        private router: Router,
        private templateService: TemplateService,
        private productService: ProductService,
        private fb: FormBuilder,
    ) {
    }

    numberMask = createNumberMask({
        prefix: '',
        suffix: '',
        thousandsSeparatorSymbol: ','
    });
    enviroment = environment;

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.invoiceService.getInvoiceDetail(id)
                .then(
                    (response: Invoice) => {
                        console.log(response);
                        this.initForm(response);
                    }
                )
                .catch(
                    (e) => {
                        console.error(e);
                        this.goHome();
                    }
                );
        });
        this.templateService.getAllTemplates()
            .then(
                (response: Array<Template>) => {
                    this.templateSelect = response.map((el: Template) => {
                        return {
                            value: el.Id,
                            label: el.Form + ' - ' + el.Serial
                        };
                    });
                }
            );
        this.productService.getAllProducts()
            .then(
                (response: Array<Product>) => {
                    this.productSelect = response.map((el: Product) => {
                        return {
                            value: el.Id,
                            label: el.Code + ' _ ' + el.Name
                        };
                    });
                }
            );
    }

    goHome() {
        this.router.navigate(['../..'], {relativeTo: this.route});
    }

    form: FormGroup;
    productSelected: InvoiceItem = new InvoiceItem();
    templateSelect = [];
    productSelect = [];
    VatSelect = [
        {value: -1, label: 'Không chịu thuế'},
        {value: 0, label: '0%'},
        {value: 5, label: '5%'},
        {value: 10, label: '10%'},
    ];
    PaymentType: Array<any> = [
        {value: 'Tiền mặt', label: 'Thanh toán bằng tiền mặt'},
        {value: 'Chuyển khoản', label: 'Thanh toán bằng chuyển khoản'}
    ];

    initForm(invoice: Invoice) {
        console.log(invoice);
        this.form = this.fb.group({
            Id: new FormControl(invoice.Id),
            TaxNo: new FormControl(invoice.TaxNo, Validators.required),
            Name: new FormControl(invoice.Name),
            Enterprise: new FormControl(invoice.Enterprise, Validators.required),
            Address: new FormControl(invoice.Address, Validators.required),
            Tel: new FormControl(invoice.Tel),
            Fax: new FormControl(invoice.Fax),
            Mail: new FormControl(invoice.Mail, Validators.required),
            Bank: new FormControl(invoice.Bank),
            BankAccountNumber: new FormControl(invoice.BankAccountNumber),
            PaymentMethod: new FormControl(invoice.PaymentMethod, Validators.required),
            PaymentStatus: new FormControl(0),
            SubTotal: new FormControl(invoice.SubTotal),
            VATRate: new FormControl(invoice.VATRate),
            VATAmount: new FormControl(invoice.VATAmount),
            Total: new FormControl(invoice.Total),
            AmountInWords: new FormControl(invoice.AmountInWords),
            DueDate: new FormControl(invoice.DueDate),
            Date: new FormControl(invoice.Date, Validators.required),
            Note: new FormControl(invoice.Note),
            TemplateId: new FormControl(invoice.TemplateId, Validators.required),
            invoiceItemCMs: this.fb.array([])
        });
        let op = this.form.get('invoiceItemCMs') as FormArray;
        invoice.InvoiceItemCMs.forEach((e: InvoiceItem) => {
            op.push(new FormControl({
                ProductId: e.ProductId,
                Name: e.Name,
                Unit: e.Unit,
                UnitPrice: e.UnitPrice,
                Quantity: e.Quantity,
                Total: e.Total
            }));
        });
    }

    update() {
        if (this.form.valid) {
            this.invoiceService.updateInvoice(this.form.value)
                .then(
                    (response) => {
                        this.goHome();
                    }
                )
                .catch(
                    (e) => {
                        console.error(e);
                    }
                );
        } else {
            console.log(this.form.invalid);
        }
    }

    deleteItem(item: any) {
        let op = this.form.get('invoiceItemCMs') as FormArray;
        op.removeAt(item);
        this.form.patchValue({
            SubTotal: op.value.reduce((t, cu) => {
                return t + cu.Total;
            }, 0)
        });
        this.updateAmount();
    }

    changeVAT() {
        this.updateAmount();
    }

    updateAmount() {

        this.form.patchValue({
            VATAmount: Math.max(this.form.get('SubTotal').value * (this.form.get('VATRate').value / 100), 0)
        });
        this.form.patchValue({
            Total: Math.max(this.form.get('SubTotal').value + this.form.get('VATAmount').value)
        });
        this.invoiceService.convertToWord(this.form.get('Total').value)
            .then(
                (response: any) => {
                    this.form.patchValue({
                        AmountInWords: response.value + ' đồng'
                    });
                }
            );
    }

    addProduct() {
        this.productSelected.Total = this.productSelected.Quantity * this.productSelected.UnitPrice;
        // this.listProductSeletected.push(this.productSelected);
        // console.log(this.listProductSeletected);
        let op = this.form.get('invoiceItemCMs') as FormArray;
        op.push(new FormControl({
            ProductId: this.productSelected.Id,
            Name: this.productSelected.Name,
            Unit: this.productSelected.Unit,
            UnitPrice: this.productSelected.UnitPrice,
            Quantity: this.productSelected.Quantity,
            Total: this.productSelected.Total
        }));
        this.productSelected = new InvoiceItem();
        this.form.patchValue({
            SubTotal: op.value.reduce((t, cu) => {
                return t + cu.Total;
            }, 0)
        });
        this.updateAmount();
    }

    getProduct(e) {
        this.productService.getProduct(e.value)
            .then(
                (reponse: any) => {
                    this.productSelected = reponse;
                    this.productSelected.Quantity = 1;
                }
            );
    }
}

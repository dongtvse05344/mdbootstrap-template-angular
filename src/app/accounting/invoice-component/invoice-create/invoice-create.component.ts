import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TemplateService } from 'src/app/manager/services/template.service';
import { ProductService } from 'src/app/manager/services/product.service';
import { Template } from 'src/app/manager/models/template';
import { Product } from 'src/app/manager/models/product';
import { createNumberMask } from 'text-mask-addons';
import { InvoiceItem } from '../../models/InvoiceItem';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyService } from 'src/app/admin/services/company.service';
import { Company } from 'src/app/admin/models/company';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
    selector: 'app-invoice-create',
    templateUrl: './invoice-create.component.html',
    styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {
    @ViewChild('errorSwal') private errorSwal: SwalComponent;

    constructor(
        private templateService: TemplateService,
        private productService: ProductService,
        private fb: FormBuilder,
        private invoiceService: InvoiceService,
        private companyService: CompanyService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    numberMask = createNumberMask({
        prefix: '',
        suffix: '',
        thousandsSeparatorSymbol: ','
    });
    form: FormGroup;
    productSelected: InvoiceItem = new InvoiceItem();
    templateSelect = [];
    productSelect = [];
    VatSelect = [
        { value: -1, label: 'Không chịu thuế' },
        { value: 0, label: '0%' },
        { value: 5, label: '5%' },
        { value: 10, label: '10%' },
    ];
    enviroment = environment;

    ngOnInit() {
        this.templateService.getAllTemplates()
            .then(
                (response: Array<Template>) => {
                    this.templateSelect = response.map((el: Template) => {
                        return {
                            value: el.Id,
                            label: el.Form + ' - ' + el.Serial
                        };
                    });
                    if (!this.form.controls['TemplateId'].value) {
                        this.form.controls['TemplateId'].patchValue(this.templateSelect[0].value);
                    }
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
        this.form = this.fb.group({
            TaxNo: new FormControl('', Validators.required),
            Name: new FormControl(''),
            Enterprise: new FormControl('', Validators.required),
            Address: new FormControl('', Validators.required),
            Tel: new FormControl(''),
            Fax: new FormControl(''),
            Email: new FormControl(),
            Bank: new FormControl(''),
            BankAccountNumber: new FormControl(''),
            PaymentMethod: new FormControl(environment.typeOfPayments[0].value, Validators.required),
            PaymentStatus: new FormControl(0),
            SubTotal: new FormControl(0),
            VATRate: new FormControl(-1),
            VATAmount: new FormControl(0),
            Total: new FormControl(0),
            AmountInWords: new FormControl(),
            DueDate: new FormControl(this.getDate(new Date()), Validators.required),
            Date: new FormControl(this.getDate(new Date()), Validators.required),
            Note: new FormControl(''),
            TemplateId: new FormControl('', Validators.required),
            Type: new FormControl(0),
            invoiceItemCMs: this.fb.array([], Validators.required)
        });
    }

    getDate(date) {
        console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
        return date.getFullYear()
            + '-' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1))
            + '-' + ((date.getDate() + 1) >= 10 ? (date.getDate() + 1) : '0' + (date.getDate() + 1));
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

    GetByTaxNo() {
        console.log(this.form.get('TaxNo').value);
        this.companyService.GetMST(this.form.get('TaxNo').value)
            .then(
                (response: Company) => {
                    this.form.patchValue({
                        Enterprise: response.Enterprise
                    });
                    this.form.patchValue({
                        Address: response.Address
                    });
                    this.form.patchValue({
                        Bank: response.Bank
                    });
                    this.form.patchValue({
                        BankAccountNumber: response.BankAccountNumber
                    });
                    this.form.patchValue({
                        Tel: response.Tel
                    });
                    this.form.patchValue({
                        Fax: response.Fax
                    });
                    this.form.patchValue({
                        Email: response.Email
                    })

                    this.fruits = response.Email

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

    changeVAT() {
        this.updateAmount();
    }

    deleteItem(item: any) {
        let op = this.form.get('invoiceItemCMs') as FormArray;
        op.removeAt(item);
        this.updateAmount();
    }

    create() {
        this.form.patchValue({
            Email: this.fruits
        });
        console.log(this.form.value);
        if (this.form.valid) {
            this.invoiceService.createInvoice(this.form.value)
                .then(
                    (response) => {
                        this.goHome();
                    }
                )
                .catch(
                    (error) => {
                        console.error(error);
                    }
                );
        } else {
            this.errorSwal.show();
        }

    }

    goHome() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    add(event: MatChipInputEvent): void {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;

            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }

            // Reset the input value
            if (input) {
                input.value = '';
            }
        }
    }

    remove(fruit: string): void {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
    }



    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    fruits: string[] = [];
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from 'src/app/manager/services/template.service';
import { ProductService } from 'src/app/manager/services/product.service';
import { Template } from 'src/app/manager/models/template';
import { Product } from 'src/app/manager/models/product';
import { createNumberMask } from 'text-mask-addons';
import { InvoiceItem } from '../../models/InvoiceItem';
import { Invoice } from '../../models/Invoice';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyService } from 'src/app/admin/services/company.service';
import { Company } from 'src/app/admin/models/company';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

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

  ) { }
  
  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ','
  })
  form: FormGroup;
  productSelected: InvoiceItem = new InvoiceItem();
  templateSelect = [];
  productSelect = [];
  VatSelect = [
    { value: -1, label: 'Không chịu thuế' },
    { value: 0, label: '0%' },
    { value: 5, label: '5%' },
    { value: 10, label: '10%' },
  ]
  PaymentType: Array<any> = [
    { value: 'Tiền mặt', label: 'Thanh toán bằng tiền mặt' },
    { value: 'Chuyển khoản', label: 'Thanh toán bằng chuyển khoản' }
  ]
  ngOnInit() {
    this.templateService.getAllTemplates()
      .then(
        (response: Array<Template>) => {
          this.templateSelect = response.map((el: Template) => {
            return {
              value: el.Id,
              label: el.Form + ' - ' + el.Serial
            }
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
            }
          })
        }
      );
    this.form = this.fb.group({
      TaxNo: new FormControl('0315549587',Validators.required),
      Name: new FormControl(''),
      Enterprise: new FormControl('',Validators.required),
      Address: new FormControl('',Validators.required),
      Tel: new FormControl(''),
      Fax: new FormControl(''),
      Mail: new FormControl('xhunter1412@gmail.com',Validators.required),
      Bank: new FormControl('VietcomBank'),
      BankAccountNumber: new FormControl('11266487254'),
      PaymentMethod: new FormControl('Tiền mặt',Validators.required),
      PaymentStatus: new FormControl(0),
      SubTotal: new FormControl(0),
      VATRate: new FormControl(-1),
      VATAmount: new FormControl(0),
      Total: new FormControl(0),
      AmountInWords: new FormControl(),
      DueDate: new FormControl('',Validators.required),
      Date: new FormControl('2019-03-31',Validators.required),
      Note: new FormControl(''),
      TemplateId: new FormControl('',Validators.required),
      Type: new FormControl(0),
      invoiceItemCMs: this.fb.array([])
    });
  }
  getProduct(e) {
    this.productService.getProduct(e.value)
      .then(
        (reponse: any) => {
          this.productSelected = reponse;
          this.productSelected.Quantity = 1;
        }
      )
  }
  GetByTaxNo()
  {
    console.log(this.form.get('TaxNo').value);
    this.companyService.GetMST(this.form.get('TaxNo').value)
      .then(
        (response:Company) =>{
          this.form.patchValue({
            Enterprise: response.Name
          })
          this.form.patchValue({
            Address: response.Address
          })
        }
      )
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
        return t + cu.Total
      }, 0)
    });
    this.updateAmount();
  }

  updateAmount() {
    this.form.patchValue({
      VATAmount: Math.max(this.form.get('SubTotal').value * (this.form.get('VATRate').value / 100), 0)
    })
    this.form.patchValue({
      Total: Math.max(this.form.get('SubTotal').value + this.form.get('VATAmount').value)
    });
    this.invoiceService.convertToWord(this.form.get('Total').value)
      .then(
        (response : any) =>
        {
          this.form.patchValue({
            AmountInWords: response.value + ' đồng'
          });
        }
      )
  }
  changeVAT() {
    this.updateAmount();
  }
  deleteItem(item: any) {
    let op = this.form.get('invoiceItemCMs') as FormArray;
    op.removeAt(item);
    this.updateAmount();
  }

  create()
  {
    if(this.form.valid)
    {
      this.invoiceService.createInvoice(this.form.value)
      .then(
        (response) =>{
          this.goHome();
        }
      )
      .catch(
        (error)=>{
          console.error(error);
        }
      )
    }else
    {
      this.errorSwal.show();
    }
    
  }
  goHome() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
  
}

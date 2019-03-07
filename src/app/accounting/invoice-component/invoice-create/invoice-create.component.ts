import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/manager/services/template.service';
import { ProductService } from 'src/app/manager/services/product.service';
import { Template } from 'src/app/manager/models/template';
import { Product } from 'src/app/manager/models/product';
import { createNumberMask } from 'text-mask-addons';
import { InvoiceItem } from '../../models/InvoiceItem';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {

  constructor(
    private templateService: TemplateService,
    private productService: ProductService
  ) { }
  numberMask = createNumberMask({
    prefix:'',
    suffix:'',
    thousandsSeparatorSymbol: ','
  })
  
  productSelected : InvoiceItem = new InvoiceItem();
  listProductSeletected : InvoiceItem[] = [];
  templateSelect = [];
  productSelect = [];
  PaymentType: Array<any> = [
    { value: '0', label: 'Thanh toán bằng tiền mặt' },
    { value: '1', label: 'Thanh toán bằng chuyển khoản' }

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
              label: el.Code + ' _ ' +el.Name
            }
          })

        }
      );
  }
  getProduct(e)
  {
    this.productService.getProduct(e.value)
      .then(
        (reponse : any) =>{
          this.productSelected = reponse;
          console.log(this.productSelected);
        }
      )
  }

  addProduct()
  {
    this.productSelected.Amount = this.productSelected.Quantity * this.productSelected.UnitPrice;
    this.listProductSeletected.push(this.productSelected);
    this.productSelected = new InvoiceItem();
    console.log(this.listProductSeletected);
  }
  deleteItem(item:InvoiceItem)
  {
    this.listProductSeletected = this.listProductSeletected.filter(function(e){
      return e != item;
    });
  }

}

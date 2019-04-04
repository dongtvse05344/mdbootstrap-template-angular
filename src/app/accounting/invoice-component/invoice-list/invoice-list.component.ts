import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { Invoice } from '../../models/Invoice';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  @ViewChild('basicModal') basicModal: any;
  @ViewChild('errorSignCode') private errorsignCodeSwal: SwalComponent;

  constructor(
    private readonly invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.getData();
  }

  _signCode :string;
  data = new PageModel<Invoice>();
  index: number = 1;
  pageSize: number = 5;
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];
  taxNoSearch: string = "";

  monthSearch: number = 3;
  yearSearch: number = 2019;

  setPageSize(num: number) {
    this.index = 1;
    this.pageSize = num;
    this.getData();
  }
  setIndex(num: number) {
    this.index = num;
    this.getData();
  }
  getData() {
    this.invoiceService.getPageInvoices(this.index, this.pageSize, this.monthSearch, this.yearSearch, this.taxNoSearch)
      .then(
        (response: PageModel<Invoice>) => {
          this.data = response;
          this.pageNumbers = new Array<Number>();
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
        }
      );
  }

  search() {
    this.setIndex(1);
    this.getData();
  }

  PDFsrc = null;

  getInvoice(invoice: Invoice) {
    this.PDFsrc = null;
    this.invoiceService.getInvoicePDF(invoice.Id)
      .subscribe(res => {
        var file = new Blob([res], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        this.PDFsrc = fileURL;
        this.basicModal.show();
      });
    //this.content = this.templateSerive.getInvoice_Link(template.Id);
  }

  approveInvoice(id: string) {
    this.invoiceService.approveInvoice(id)
      .then(
        () => {
          this.getData();
        }
      )
      .catch(
        (e) => {
          console.error(e);
        }
      )
  }
  delete(id: string) {
    this.invoiceService.deleteInvoice(id)
      .then(
        () => {
          this.getData();
        }
      )
      .catch(
        (e) => {
          console.error(e);
        }
      )
  }
  getCode()
  {
    this.invoiceService.getCodeSign()
      .then(
        (response:any)=>{
          this._signCode = response.value;
          console.log(this._signCode);
          swal(this._signCode, 'Dán mã vào chương trình để kí', 'success');
        }
      )
      .catch(
        ()=>
        {
          this.errorsignCodeSwal.show();
        }
      )
  }

  getReCode()
  {
    this.invoiceService.reGetCodeSign()
      .then(
        (response)=>{
          this._signCode = response.value;
          swal(this._signCode, 'Dán mã vào chương trình để kí', 'success');
        }
      )
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {PageModel} from 'src/app/core/models/PageModel';
import {Invoice} from '../../models/Invoice';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
    @ViewChild('basicModal') basicModal: any;
    @ViewChild('errorSignCode') private errorsignCodeSwal: SwalComponent;

    _signCode: string;
    data = new PageModel<Invoice>();
    state = {
        index: 1,
        pageSize: 5,
        enterprise: '',
        pageNumbers: [],
        pageSizeNumbers: [5, 10, 20, 50],
        TaxNo: '',
        fromDate: null,
        toDate: null
    };
    config = {
        dateFormat: 'dd/mm/yyyy',
    };
    PDFsrc = null;

    constructor(
        private readonly invoiceService: InvoiceService
    ) {
    }

    ngOnInit() {
        this.getData();
    }

    setPageSize(num: number) {
        this.state.index = 1;
        this.state.pageSize = num;
        this.getData();
    }

    setIndex(num: number) {
        this.state.index = num;
        this.getData();
    }

    getData() {
        const state = Object.assign({}, this.state);
        delete state.pageSizeNumbers;
        delete state.pageNumbers;
        const urlString = this.parseUrlString(state);
        this.invoiceService.getPageInvoices(urlString)
            .then(
                (response: PageModel<Invoice>) => {
                    this.data = response;
                    this.state.pageNumbers = new Array<Number>();
                    for (let i = response.Left; i <= response.Right; i++) {
                        this.state.pageNumbers.push(i);
                    }
                }
            );
    }

    getDate(date) {
        console.log(date);
        return date;
    }

    search() {
        this.setIndex(1);
        this.getData();
    }

    getInvoice(invoice: Invoice) {
        this.PDFsrc = null;
        this.invoiceService.getInvoicePDF(invoice.Id)
            .subscribe(res => {
                const file = new Blob([res], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(file);
                this.PDFsrc = fileURL;
                this.basicModal.show();
            });
        // this.content = this.templateSerive.getInvoice_Link(template.Id);
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
            );
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
            );
    }

    getCode() {
        this.invoiceService.getCodeSign()
            .then(
                (response: any) => {
                    this._signCode = response.value;
                    console.log(this._signCode);
                    swal(this._signCode, 'Dán mã vào chương trình để kí', 'success');
                }
            )
            .catch(
                () => {
                    this.errorsignCodeSwal.show();
                }
            );
    }

    getReCode() {
        this.invoiceService.reGetCodeSign()
            .then(
                (response) => {
                    this._signCode = response.value;
                    swal(this._signCode, 'Dán mã vào chương trình để kí', 'success');
                }
            );
    }

    parseUrlString(data: any) {
        let str = '?';
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
                    str += key + '=' + data[key] + '&';
                }
            }
        }
        return str.replace(/([&?])$/g, '');
    }

}

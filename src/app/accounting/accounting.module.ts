import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountinRoutingModule } from './accounting-routing.module';
import { AccountingLayoutComponent } from './layout-component/accounting-layout/accounting-layout.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { InvoiceCreateComponent } from './invoice-component/invoice-create/invoice-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { InvoiceListComponent } from './invoice-component/invoice-list/invoice-list.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InvoiceEditComponent } from './invoice-component/invoice-edit/invoice-edit.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AccountPasswordComponent } from './account-component/account-password/account-password.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule, MatIconModule, MatSlideToggleModule, MatAutocompleteModule } from '@angular/material';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';

@NgModule({
  declarations: [AccountingLayoutComponent, InvoiceCreateComponent, InvoiceListComponent, InvoiceEditComponent, AccountPasswordComponent, CustomerListComponent],
  imports: [
    CommonModule,
    AccountinRoutingModule,
    MDBBootstrapModulesPro,
    ToastModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    MatChipsModule,MatFormFieldModule,MatIconModule,MatSlideToggleModule, MatAutocompleteModule,
    DpDatePickerModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    PdfViewerModule
  ]
})
export class AccountingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountinRoutingModule } from './accounting-routing.module';
import { AccountingLayoutComponent } from './layout-component/accounting-layout/accounting-layout.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { InvoiceCreateComponent } from './invoice-component/invoice-create/invoice-create.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [AccountingLayoutComponent, InvoiceCreateComponent],
  imports: [
    CommonModule,
    AccountinRoutingModule,
    MDBBootstrapModulesPro,
    ToastModule,
    FormsModule,
    TextMaskModule
  ]
})
export class AccountingModule { }

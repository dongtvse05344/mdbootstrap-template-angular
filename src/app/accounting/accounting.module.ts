import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountinRoutingModule } from './accounting-routing.module';
import { AccountingLayoutComponent } from './layout-component/accounting-layout/accounting-layout.component';

@NgModule({
  declarations: [AccountingLayoutComponent],
  imports: [
    CommonModule,
    AccountinRoutingModule
  ]
})
export class AccountingModule { }

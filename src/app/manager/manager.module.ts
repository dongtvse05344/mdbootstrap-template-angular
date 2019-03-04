import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerLayoutComponent } from './layout-component/manager-layout/manager-layout.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { AccountListComponent } from './account-component/account-list/account-list.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateListComponent } from './template-component/template-list/template-list.component';
import { TemplateCreateComponent } from './template-component/template-create/template-create.component';
import { ProductListComponent } from './product-component/product-list/product-list.component';
import { ProductCreateComponent } from './product-component/product-create/product-create.component';
import { ProductEditComponent } from './product-component/product-edit/product-edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { TemplateEditComponent } from './template-component/template-edit/template-edit.component';
@NgModule({
  declarations: [ManagerLayoutComponent, AccountListComponent, TemplateListComponent, TemplateCreateComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent, TemplateEditComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MDBBootstrapModulesPro,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
  ]
})
export class ManagerModule { }

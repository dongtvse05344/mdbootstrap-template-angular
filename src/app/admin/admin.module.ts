import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layout-components/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { ListCompanyComponent } from './company-components/list-company/list-company.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CreateCompanyComponent } from './company-components/create-company/create-company.component';
import { FormsModule } from '@angular/forms';
import { EditCompanyComponent } from './company-components/edit-company/edit-company.component';
import { AdminComponent } from './account-components/admin/admin.component';
import { ListStaffComponent } from './account-components/list-staff/list-staff.component';
import { StaffCreateComponent } from './account-components/staff-create/staff-create.component';
import { StaffEditComponent } from './account-components/staff-edit/staff-edit.component';

@NgModule({
  declarations: [ AdminLayoutComponent, ListCompanyComponent, CreateCompanyComponent, EditCompanyComponent, AdminComponent, ListStaffComponent, StaffCreateComponent, StaffEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModulesPro, 
    FormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
  ]
})
export class AdminModule { }

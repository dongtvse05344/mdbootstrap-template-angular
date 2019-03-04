import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminLayoutComponent } from "./layout-components/admin-layout/admin-layout.component";
import { ListCompanyComponent } from "./company-components/list-company/list-company.component";
import { CreateCompanyComponent } from "./company-components/create-company/create-company.component";
import { EditCompanyComponent } from "./company-components/edit-company/edit-company.component";
import { AdminComponent } from "./account-components/admin/admin.component";
import { ListStaffComponent } from "./account-components/list-staff/list-staff.component";
import { StaffCreateComponent } from "./account-components/staff-create/staff-create.component";
import { StaffEditComponent } from "./account-components/staff-edit/staff-edit.component";

const routes: Routes = [
    {
        path: 'admin', component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'companies', pathMatch: 'full' },
            { path: 'companies', component: ListCompanyComponent },
            { path: 'companies/create', component: CreateCompanyComponent },
            { path : 'companies/edit/:id' ,component : EditCompanyComponent},
            { path : 'account' , redirectTo : 'account/admin',pathMatch : 'full'},
            { path : 'account/admin' , component : AdminComponent},
            { path : 'companies/account/:id', component : ListStaffComponent},
            { path : 'companies/account/:id/createStaff', component : StaffCreateComponent},
            { path : 'companies/account/:id/updateStaff/:staffId', component : StaffEditComponent}
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ManagerLayoutComponent } from "./layout-component/manager-layout/manager-layout.component";
import { AccountListComponent } from "./account-component/account-list/account-list.component";
import { TemplateListComponent } from "./template-component/template-list/template-list.component";
import { TemplateCreateComponent } from "./template-component/template-create/template-create.component";
import { ProductListComponent } from "./product-component/product-list/product-list.component";
import { ProductCreateComponent } from "./product-component/product-create/product-create.component";
import { ProductEditComponent } from "./product-component/product-edit/product-edit.component";
import { TemplateEditComponent } from "./template-component/template-edit/template-edit.component";
import { AccountEditComponent } from "./account-component/account-edit/account-edit.component";
import { AccountCreateComponent } from "./account-component/account-create/account-create.component";
import { PasswordChangeComponent } from "./account-component/password-change/password-change.component";
import { CompanyInfoComponent } from "./company-component/company-info/company-info.component";

const routes: Routes = [
    {
        path: 'manager', component: ManagerLayoutComponent,
        // data: {
        //     roles: ['manager']
        // },
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            { path: 'account/create', component: AccountCreateComponent },
            { path: 'account/password', component: PasswordChangeComponent },
            { path: 'account/updateStaff/:id', component: AccountEditComponent },
            { path: 'company', component: CompanyInfoComponent },

            { path: 'template', component: TemplateListComponent },
            { path: 'template/create', component: TemplateCreateComponent },
            { path: 'template/:id/edit', component: TemplateEditComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/create', component: ProductCreateComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }
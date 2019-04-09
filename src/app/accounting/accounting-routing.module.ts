import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountingLayoutComponent } from "./layout-component/accounting-layout/accounting-layout.component";
import { InvoiceCreateComponent } from "./invoice-component/invoice-create/invoice-create.component";
import { InvoiceListComponent } from "./invoice-component/invoice-list/invoice-list.component";
import { InvoiceEditComponent } from "./invoice-component/invoice-edit/invoice-edit.component";
import { ProductListComponent } from "../manager/product-component/product-list/product-list.component";
import { ProductCreateComponent } from "../manager/product-component/product-create/product-create.component";
import { ProductEditComponent } from "../manager/product-component/product-edit/product-edit.component";
import { AccountPasswordComponent } from "./account-component/account-password/account-password.component";

const routes: Routes = [

    { path: 'accounting', component: AccountingLayoutComponent, 
        children: [
            {path: '',redirectTo: 'invoice', pathMatch: "full"},
            {path: 'invoice',component: InvoiceListComponent},
            {path: 'invoice/create',component: InvoiceCreateComponent},
            {path: 'invoice/:id/edit', component: InvoiceEditComponent},
            { path: 'product', component: ProductListComponent },
            { path: 'product/create', component: ProductCreateComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
            { path: 'password', component: AccountPasswordComponent },

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountinRoutingModule { }
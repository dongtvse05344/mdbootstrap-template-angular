import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountingLayoutComponent } from "./layout-component/accounting-layout/accounting-layout.component";
import { InvoiceCreateComponent } from "./invoice-component/invoice-create/invoice-create.component";
import { InvoiceListComponent } from "./invoice-component/invoice-list/invoice-list.component";
import { InvoiceEditComponent } from "./invoice-component/invoice-edit/invoice-edit.component";

const routes: Routes = [

    { path: 'accounting', component: AccountingLayoutComponent, 
        children: [
            {path: 'invoice',component: InvoiceListComponent},
            {path: 'invoice/create',component: InvoiceCreateComponent},
            {path: 'invoice/:id/edit', component: InvoiceEditComponent}
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountinRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountingLayoutComponent } from "./layout-component/accounting-layout/accounting-layout.component";
import { InvoiceCreateComponent } from "./invoice-component/invoice-create/invoice-create.component";

const routes: Routes = [

    { path: 'accounting', component: AccountingLayoutComponent, 
        children: [
            {path: 'invoice/create',component: InvoiceCreateComponent}
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountinRoutingModule { }
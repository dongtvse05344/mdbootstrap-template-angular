import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { CompanyService } from '../../../admin/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../admin/services/account.service';
import { Staff } from 'src/app/admin/models/staff';
import { Company } from 'src/app/admin/models/company';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private readonly companyService: CompanyService, 
    private route: ActivatedRoute,
    private location : Location,
    private toastrService: ToastService

  ) { }

  staff: Staff = new Staff();
  company: Company = new Company();
  confirmPassword: string = "";
  roles: Array<{ text : string; value: string , checked : boolean }> = new Array<{ text: string; value: string , checked : boolean  }>();


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.companyService.GetCompany_()
        .then(
          (response: Company) => {
            this.company = response
            this.staff.CompanyId = this.company.Id
          }
        )
        .catch(
          (error) => {
            console.error(error);
            this.goHome();
          }
        );
    });
    this.initRoles();
  }



  initRoles() {
    this.roles.push(
      {
        text: environment.RoleName.RoleManager.text,
        value: environment.RoleName.RoleManager.value,
        checked: false
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleAccountingManager.text,
        value: environment.RoleName.RoleAccountingManager.value,
        checked: true
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleLiabilityAccountant.text,
        value: environment.RoleName.RoleLiabilityAccountant.value,
        checked: true
      }
    );

    this.roles.push(
      {
        text: environment.RoleName.RolePayableAccountant.text,
        value: environment.RoleName.RolePayableAccountant.value,
        checked: true
      }
    );
  }

  create() {
    this.staff.Roles = this.getRoleChecked();
    this.accountService.CreateStaff(this.staff)
      .then(
        (Response) => {
          this.opacityShowSuccess("Tạo tài khoản thành công");
          this.goHome();
        }
      )
      .catch(
        (error) => {
          console.error(error);
          this.opacityShowError("Dữ liệu không phù hợp");
        }
      )
  }

  getRoleChecked(): Array<String> {
    var result = new Array<String>();
    this.roles.forEach(element => {
      if (element.checked) {
        result.push(element.value);
      }
    });
    return result;
  }

  goHome() {
    // this.router.navigate(["../"]);
    this.location.back();
  }

  opacityShowSuccess(mess: string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
  }

  opacityShowError(mess: string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.error(mess, 'Error message', options);
  }

}

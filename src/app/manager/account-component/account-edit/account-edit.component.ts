import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/admin/services/account.service';
import { CompanyService } from 'src/app/admin/services/company.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Company } from 'src/app/admin/models/company';
import { environment } from 'src/environments/environment';
import { Staff } from 'src/app/admin/models/staff';
import { Location } from '@angular/common';


@Component({
  selector: 'app-manager-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
})
export class AccountEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private readonly companyService: CompanyService,
    private location: Location,
    private toastrService: ToastService
  ) { }

  company: Company = new Company();
  staff: Staff = new Staff();

  roles: Array<{ text: string; value: string, checked: boolean }> = new Array<{ text: string; value: string, checked: boolean }>();
  ngOnInit() {
    this.route.params.subscribe(params => {
      var staffId = params['id'];
      this.accountService.GetStaff(staffId)
        .then(
          (response: Staff) => {
            this.staff = response;
            this.initRoles();
          }
        )
      this.companyService.GetCompany_()
        .then(
          (response: Company) => {
            this.company = response;
          }
        )
    });
  }

  initRoles() {
    this.roles.push(
      {
        text: environment.RoleName.RoleManager.text,
        value: environment.RoleName.RoleManager.value,
        checked: this.isRoleChecked(environment.RoleName.RoleManager.value)
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleAccountingManager.text,
        value: environment.RoleName.RoleAccountingManager.value,
        checked: this.isRoleChecked(environment.RoleName.RoleAccountingManager.value)
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleLiabilityAccountant.text,
        value: environment.RoleName.RoleLiabilityAccountant.value,
        checked: this.isRoleChecked(environment.RoleName.RoleLiabilityAccountant.value)
      }
    );

    this.roles.push(
      {
        text: environment.RoleName.RolePayableAccountant.text,
        value: environment.RoleName.RolePayableAccountant.value,
        checked: this.isRoleChecked(environment.RoleName.RolePayableAccountant.value)
      }
    );
  }

  isRoleChecked(role: string): boolean {
    var result = false;
    this.staff.Roles.forEach(e => {
      if (e == role) {
        result = true;
      }
    });
    return result;
  }

  update() {
    this.staff.Roles = this.getRoleChecked();
    this.accountService.UpdateStaff(this.staff)
      .then(
        (Response) => {
          this.opacityShowSuccess("Sửa thông tin tài khoản thành công");
          this.goHome();
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      )
  }

  opacityShowSuccess(mess : string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
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
}



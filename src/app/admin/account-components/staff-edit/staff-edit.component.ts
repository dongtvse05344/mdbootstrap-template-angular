import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { CompanyService } from '../../services/company.service';
import { Staff } from '../../models/staff';
import { Company } from '../../models/company';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private readonly companyService: CompanyService,
    private location: Location,
    private toastrService: ToastService

  ) { }

  staff: Staff = new Staff();
  company: Company = new Company();
  roles: Array<{ text: string; value: string, checked: boolean }> = new Array<{ text: string; value: string, checked: boolean }>();


  ngOnInit() {
    this.route.params.subscribe(params => {
      var companyId = params['id'];
      var staffId = params['staffId'];
      this.accountService.GetStaff(staffId)
        .then(
          (response: Staff) => {
            this.staff = response;
            this.initRoles();
          }
        )
      this.companyService.GetCompany(companyId)
        .then(
          (response: Company) => {
            this.company = response;
          }
        )
    });
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

  getRoleChecked(): Array<String> {
    var result = new Array<String>();
    this.roles.forEach(element => {
      if (element.checked) {
        result.push(element.value);
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

  goHome() {
    // this.router.navigate(["../"]);
    this.location.back();
  }

  opacityShowSuccess(mess : string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
  }

}

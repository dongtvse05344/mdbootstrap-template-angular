import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Staff } from '../../models/staff';
import { Company } from '../../models/company';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.scss']
})
export class StaffCreateComponent implements OnInit {

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
      var id = params['id'];
      this.companyService.GetCompany(id)
        .then(
          (response: Company) => {
            this.company = response
            this.staff.CompanyId = this.company.Id
          }
        )
        .catch(
          (error) =>{
            console.error(error);
            this.goHome();
          }
        );
    });

    this.roles.push(
      {
        text: environment.RoleName.RoleManager.text,
        value: environment.RoleName.RoleManager.value,
        checked : false
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleAccountingManager.text,
        value: environment.RoleName.RoleAccountingManager.value,
        checked : true
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RoleLiabilityAccountant.text,
        value: environment.RoleName.RoleLiabilityAccountant.value,
        checked : false
      }
    );
    this.roles.push(
      {
        text: environment.RoleName.RolePayableAccountant.text,
        value: environment.RoleName.RolePayableAccountant.value,
        checked : false
      }
    );  
  }

  getRoleChecked() : Array<String>
  {
    var result = new Array<String>();
    this.roles.forEach(element => {
      if(element.checked)
      {
        result.push(element.value); 
      }
    });
    return result;
  }

  create()
  {
    this.staff.Roles = this.getRoleChecked();
    this.accountService.CreateStaff(this.staff)
      .then(
        (Response) =>{
          this.opacityShowSuccess("Tạo tài khoản thành công");
          this.goHome();
        }
      )
      .catch(
        (error) =>{
          console.error(error);
          this.opacityShowError("Dữ liệu không phù hợp");
        }
      )
  }

  goHome()
  {
    // this.router.navigate(["../"]);
    this.location.back();
  }

  opacityShowSuccess(mess : string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
  }

  opacityShowError(mess : string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.error(mess, 'Error message', options);
  }
}

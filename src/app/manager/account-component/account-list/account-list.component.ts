import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
import { AccountService } from 'src/app/admin/services/account.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Company } from 'src/app/admin/models/company';
import { Router } from '@angular/router';
import { PageModel } from 'src/app/core/models/PageModel';
import { Staff } from 'src/app/admin/models/staff';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  constructor(
    private toastrService: ToastService,
    private accountService: AccountService,
    private router: Router,
    private authService: AuthService,

  ) { }
  username = this.authService.getUserName();
  company: Company = new Company();
  data: PageModel<Staff> = new PageModel<Staff>();
  deleteStaff: Staff = new Staff();
  pageSize: number = 5;
  index: number = 1;
  nameSearch: string = "";
  usernameSearch: string = "";
  emailSearch: string = "";
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];
  setPageSize(num: number) {
    this.index = 1;
    this.pageSize = num;
    this.getData();
  }
  setIndex(num: number) {
    this.index = num;
    this.getData();
  }

  getData() {
    this.accountService.GetStaffByCompany(this.index, this.pageSize, this.company.Id, this.nameSearch, this.usernameSearch, this.emailSearch)
      .then(
        (response: PageModel<Staff>) => {
          this.data = response
          this.pageNumbers = new Array<Number>();
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
        }
      );
  }

  search() {
    this.setIndex(1);
    this.getData();
  }

  delete(staff: Staff) {
    this.accountService.DeleteStaff(staff.Id)
      .then(
        () => {
          this.getData();
        }
      )
  }
  ToggleId(staff: Staff) {
    this.accountService.ToggleActive(staff.Id)
      .then(
        () => {
          staff.IsActive = !staff.IsActive;
          if (staff.IsActive) {
            this.opacityShowSuccess('Khôi phục account thành công');
          }
          else {
            this.opacityShowSuccess('Khóa account thành công');
          }
        }
      )
  }

  opacityShowSuccess(mess: string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
  }


  ngOnInit() {
    this.authService.getCompany()
      .then(
        (response: Company) => {
          this.company = response
          this.getData();

        }
      )
      .catch(
        (error) => {
          this.serverShowError("Lỗi dữ liệu về công ty, vui lòng kiểm tra lại");
          this.logOut();
        }
      )
  }

  serverShowError(mess: string) {
    this.toastrService.error("Error: " + mess);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([""]);
  }
}

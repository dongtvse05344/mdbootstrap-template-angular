import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { AccountService } from '../../services/account.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { Staff } from '../../models/staff';
import { Company } from '../../models/company';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private accountService: AccountService,
    private toastrService: ToastService

  ) { }

  data: PageModel<Staff> = new PageModel<Staff>();
  deleteStaff: Staff = new Staff();
  company: Company = new Company();
  id: string;
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.companyService.GetCompany(this.id)
      .then(
        (response: Company) => {
          this.company = response
        }
      );

    this.getData();
  }

  getData() {
    this.accountService.GetStaffByCompany(this.index, this.pageSize, this.id, this.nameSearch, this.usernameSearch, this.emailSearch)
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

}

import { Component, OnInit } from '@angular/core';
import { PageModel } from 'src/app/core/models/PageModel';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']

})
export class ListCompanyComponent implements OnInit {

  data: PageModel<Company> = new PageModel<Company>();
  constructor(
    private companyService: CompanyService,
    private toastrService: ToastService
  ) { }
  index: number = 1; 
  pageSize: number = 5;
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];

  nameSearch: string = "";
  taxNoSearch: string = "";
  addressSearch: string = "";
  telSearch: string = "";

  ngOnInit() {
    this.getData();
  }

  search() {
    this.setIndex(1);
    this.getData();
  }

  getData() {
    this.companyService.GetCompanies(this.index, this.pageSize, this.nameSearch, this.taxNoSearch, this.addressSearch, this.telSearch)
      .then(
        (response: PageModel<Company>) => {
          this.data = response;
          this.pageNumbers = new Array<Number>();
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
        }
      );
  }
  setPageSize(num: number) {
    this.index = 1;
    this.pageSize = num;
    this.getData();
  }
  setIndex(num: number) {
    this.index = num;
    this.getData();
  }

  ToggleActive(company: Company) {
    this.companyService.ToggleId(company.Id)
      .then((response) => {
        company.IsActive = !company.IsActive;

        if(company.IsActive)
        {
          this.opacityShowSuccess('Khôi phục công ty thành công');
        }
        else
        {
          this.opacityShowSuccess('Khóa công ty thành công');

        }
      });
  }
  delete(company: Company) {
    this.companyService.DeleteCompany(company.Id)
      .then(
        (response: any) => {
          this.getData();
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      );
  }

  opacityShowSuccess(mess : string) {
    const options = { toastClass: 'opacity' };
    this.toastrService.success(mess, 'Success message', options);
  }

}

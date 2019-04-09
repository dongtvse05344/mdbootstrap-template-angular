import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/admin/services/company.service';
import { Company } from 'src/app/admin/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  @ViewChild('updateFail') private deleteSwal: SwalComponent;
  @ViewChild('updateSuccess') private successSwal: SwalComponent;
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route : ActivatedRoute,


  ) { }
  company = new Company();
  ngOnInit() {
    this.companyService.GetCompany_()
      .then(
        (response:Company) =>{
          this.company = response;
          console.log(this.company);
        }
      )
  }

  update()
  {
    this.companyService.UpdateCompany(this.company)
      .then(
        (response) => {
          this.successSwal.show();
        }
      )
      .catch(
        (error)=>{
          this.deleteSwal.show();
        }
      )
  }

  goHome()
  {
    this.router.navigate([""]);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  @ViewChild('addFail') private deleteSwal: SwalComponent;
  @ViewChild('addSuccess') private successSwal: SwalComponent;
  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }
  company: Company = new Company();

  ngOnInit() {
  }

  getMST()
  {
    this.companyService.GetMST(this.company.TaxNo)
      .then(
        (response : Company) =>{
          this.company.Name = response.Name;
          this.company.Address = response.Address;
        }
      )
  }

  create()
  {
    this.companyService.CreateCompany(this.company)
      .then(
        (respose : any)=>{
          this.successSwal.show();
        }
      )
      .catch(
        (error) => {
          this.deleteSwal.show();
        }
      )
  }
  goHome()
  {
    this.router.navigate([""]);
  }

}

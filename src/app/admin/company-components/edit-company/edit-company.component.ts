import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  @ViewChild('updateFail') private deleteSwal: SwalComponent;
  @ViewChild('updateSuccess') private successSwal: SwalComponent;
  constructor(
    private route : ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) { }

  id : string 
  company : Company = new Company();
  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.id = params['id'];
    });

    this.companyService.GetCompany(this.id)
      .then(
        (response : Company)=>{
          this.company = response
        }
      )
      .catch(
        (error)=>{
          console.error(error);
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

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { PageModel } from 'src/app/core/models/PageModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }
  index: number = 1;
  pageSize: number = 5;
  data: PageModel<Account> = new PageModel<Account>();
  pageNumbers: Array<Number> = new Array<Number>();
  pageSizeNumbers: Number[] = [5, 10, 20, 50];
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.accountService.GetAdmins(this.index, this.pageSize)
      .then(
        (response: PageModel<Account>) => {
          this.data = response;
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
          console.log(this.data);
        }
      )
  }

}

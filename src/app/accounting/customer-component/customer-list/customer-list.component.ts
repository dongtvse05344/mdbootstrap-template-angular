import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(
    private readonly customerService: CustomerService
  ) { }
  data: PageModel<Customer>;
  state = {
    index: 1,
    pageSize: 5,
    companyName: '',
    pageNumbers: [],
    pageSizeNumbers: [5, 10, 20, 50],
    nameSearch: '',
  };
  ngOnInit() {
    this.getData();
  }

  setPageSize(num: number) {
    this.state.index = 1;
    this.state.pageSize = num;
    this.getData();
  }

  setIndex(num: number) {
    this.state.index = num;
    this.getData();
  }


  getData() {
    const state = Object.assign({}, this.state);
    delete state.pageSizeNumbers;
    delete state.pageNumbers;
    const urlString = this.parseUrlString(state);
    this.customerService.getCustomers(urlString)
      .then(
        (response: any) => {
          this.data = response;
          this.state.pageNumbers = new Array<Number>();
          for (let i = response.Left; i <= response.Right; i++) {
            this.state.pageNumbers.push(i);
          }
        }
      );
  }

  parseUrlString(data: any) {
    let str = '?';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
          str += key + '=' + data[key] + '&';
        }
      }
    }
    return str.replace(/([&?])$/g, '');
  }

}

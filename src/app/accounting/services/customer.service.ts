import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageModel } from 'src/app/core/models/PageModel';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCustomers(urlString:string) {
    return this.httpClient.get<PageModel<Customer>>(
      `${environment.endPoint}${environment.apiPaths.customer.main}${urlString}`,
    ).toPromise();
  }

  createCustomer(customer: any) {
    return this.httpClient.post(
      `${environment.endPoint}${environment.apiPaths.customer.main}`, customer
    ).toPromise();
  }

  updateCustomer(customer: any) {
    return this.httpClient.put(
      `${environment.endPoint}${environment.apiPaths.customer.main}`, customer
    ).toPromise();
  }

  GetMST(taxNo: string): Promise<Customer> {
    return this.httpClient.get<Customer>(
      `${environment.endPoint}${environment.apiPaths.customer.main}/${environment.apiPaths.customer.enterprise}?taxNo=${taxNo}`
    ).toPromise();
  }
}

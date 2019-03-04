import { Injectable } from '@angular/core';
import { PageModel } from 'src/app/core/models/PageModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  GetAdmins(index : number, pageSize: number)
  {
    return this.httpClient.get<PageModel<Account>>(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.account.admin}?index=${index}&pageSize=${pageSize}`
    ).toPromise();
  }
  GetStaffByCompany(index : number , pageSize : number, id : string, name:string,username : string , email : string){
    return this.httpClient.get<PageModel<Staff>>(
      `${environment.endPoint}${environment.apiPaths.account.main}/Company/${id}/${environment.apiPaths.company.staff}?index=${index}&pageSize=${pageSize}
      &name=${name}&username=${username}&email=${email}`
    ).toPromise();
  }

  GetStaff(id : string)
  {
    return this.httpClient.get<Staff>(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.company.staff}/${id}`
    ).toPromise();
  }

  CreateStaff(staff: Staff)
  {
    return this.httpClient.post<any>(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.company.staff}`,staff
    ).toPromise();
  }
  UpdateStaff(staff: Staff)
  {
    return this.httpClient.put<any>(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.company.staff}`,staff
    ).toPromise();
  }
  DeleteStaff(id : string)
  {
    return this.httpClient.delete<any>(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.company.staff}/${id}`
    ).toPromise();
  }
  ToggleActive(id : string)
  {
    return this.httpClient.put<any>(
      `${environment.endPoint}${environment.apiPaths.account.main}/ToggleActive/${id}`,{
      }
    ).toPromise();
  }
}

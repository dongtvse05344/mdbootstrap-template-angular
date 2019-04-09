import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  changePassword(model:any)
  {
    return this.httpClient.post(
      `${environment.endPoint}${environment.apiPaths.account.main}/${environment.apiPaths.account.ChangePassword}`, model
    ).toPromise();
  }

  
  
}

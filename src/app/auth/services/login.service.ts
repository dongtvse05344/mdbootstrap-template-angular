import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from 'src/app/core/models/Token';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { Company } from 'src/app/admin/models/company';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private authService : AuthService
    ) { }

  login(username: string, password: string): Promise<Token> {
    return this.httpClient.post<Token>(
      `${environment.endPoint}${environment.apiPaths.auth.login}`,
      {
        UserName: username,
        Password: password,
      }
    ).toPromise();
  }
  
  

}

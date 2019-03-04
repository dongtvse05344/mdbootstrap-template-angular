import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Token } from '../models/Token';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from 'src/app/admin/models/company';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(
    private router: Router,
    private httpClient: HttpClient,

  ) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token: Token = this.getToken();
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  getToken(): Token {
    let token: Token;
    try {
      token = JSON.parse(localStorage.getItem(environment.token));
    } catch (e) {
    }
    return token;
  }

  setToken(token: Token, userName: string): void {
    localStorage.setItem(environment.roles,JSON.stringify(token.roles));
    localStorage.setItem(environment.token, JSON.stringify(token));
    localStorage.setItem(`${environment.token}_username`, userName);
  }

  clearToken(): void {
    localStorage.clear();
  }

  getUserName(): string {
    return localStorage.getItem(`${environment.token}_username`);
  }
  getRoles(): String[]
  {
    let roles: String[];
    try {
      roles = JSON.parse(localStorage.getItem(environment.roles));
    } catch (e) {
    }
    return roles;
  }

  getCompany()
  {
    console.log('a');

   // var header : HttpHeaders = new HttpHeaders();
   // header = header.set('Authorization', 'Bearer ' + this.getToken().access_token);
    return this.httpClient.get<Company>(
      `${environment.endPoint}${environment.apiPaths.auth.company}`,{
    //    headers : header
      }
    ).toPromise();
  }
}

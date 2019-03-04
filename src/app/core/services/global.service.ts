import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isLogin: boolean;
  userName: string;
  requestEvent: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(
    private authGuardService: AuthService
  ) {
    const token: Token = this.authGuardService.getToken();
    this.isLogin = token ? true : false;
    this.userName = this.authGuardService.getUserName();
   }
}

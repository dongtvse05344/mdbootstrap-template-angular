import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { GlobalService } from './core/services/global.service';
import { LoginService } from './auth/services/login.service';
import { Company } from './admin/models/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'HiEIS';
  username: string;

  constructor(
    private authGuardService: AuthService,
    private globalService : GlobalService,
    private loginService : LoginService
  )
  {
    
  }
  ngOnInit(): void {
    
  }
  
  
}

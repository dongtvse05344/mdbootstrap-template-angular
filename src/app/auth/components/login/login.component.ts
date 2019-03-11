import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/Login';
import { LoginService } from '../../services/login.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/core/models/Token';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private authGuardService: AuthService,
    private globalService: GlobalService,
    private router: Router,
    public fb: FormBuilder

  ) {
    this.simpleForm = fb.group({
      simpleFormEmailEx: ['', [Validators.required]],
      simpleFormPasswordEx: ['', Validators.required],
    });
  }
  private model = new LoginModel();
  loginFailed: string;

  simpleForm: FormGroup;

  ngOnInit() {
    this.model.password = '123456';
    this.model.username = 'hisoft.accounting.manager'
  }

  Login() {
    this.loginService.login(this.model.username, this.model.password)
      .then(
        (response: Token) => {
          if (response) {
            this.authGuardService.clearToken();
            this.authGuardService.setToken(response, this.model.username);
            this.router.navigate(['']);
            this.globalService.isLogin = true;
            this.globalService.userName = this.model.username;

          }
        }
      )
      .catch(error => {
        this.globalService.isLogin = false;
        this.loginFailed = "Sai tên đăng nhập và mật khẩu";
      });
  }
  resetLoginFailed() {
    this.loginFailed = null;
  }

}

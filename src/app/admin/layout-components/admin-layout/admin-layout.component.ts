import { Component, OnInit, Inject, Renderer2, RendererStyleFlags2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  constructor(
    private loginService : LoginService,
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any
    ) { }

  ngOnInit() {
    
    const body = this.document.querySelector('body');
    this.renderer.addClass(body, 'light-blue-skin');
    
  }


  ngOnDestroy() {
    const body = this.document.querySelector('body');
    this.renderer.removeClass(body, 'light-blue-skin');
  }

  logOut()
  {
    localStorage.clear();
    this.router.navigate([""]);
  }

}

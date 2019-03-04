import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Company } from 'src/app/admin/models/company';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { AccountService } from 'src/app/admin/services/account.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { Staff } from 'src/app/admin/models/staff';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.scss']
})
export class ManagerLayoutComponent implements OnInit, OnDestroy {


  constructor(
    private renderer: Renderer2,
    private router: Router,
    
    @Inject(DOCUMENT) private document: any
  ) { }


  ngOnInit() {
    const body = this.document.querySelector('body');
    this.renderer.addClass(body, 'light-blue-skin');
  }

  ngOnDestroy(): void {
    const body = this.document.querySelector('body');
    this.renderer.removeClass(body, 'light-blue-skin');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([""]);
  }

}

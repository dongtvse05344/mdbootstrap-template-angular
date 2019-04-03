import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-accounting-layout',
  templateUrl: './accounting-layout.component.html',
  styleUrls: ['./accounting-layout.component.scss']
})
export class AccountingLayoutComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) { }
  ngOnInit() {
    const body = this.document.querySelector('body');
    this.renderer.addClass(body, 'light-blue-skin');
  }
  logOut()
  {
    localStorage.clear();
    this.router.navigate([""]);
  }
}

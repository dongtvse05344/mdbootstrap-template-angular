import { Component, OnInit, Renderer2, Inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-f-s-n-f-n',
  templateUrl: './f-s-n-f-n.component.html',
  styleUrls: ['./f-s-n-f-n.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FSNFNComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    const nav = this.document.querySelector('app-nav');
    const footer = this.document.querySelector('app-footer');
    const body = this.document.querySelector('body');

    if (this.sharedService.navHideNavAndFooter()) {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(footer, 'display', 'none');
      this.renderer.addClass(body, 'pink-skin');
    }
  }

  ngOnDestroy() {
    const nav = this.document.querySelector('app-nav');
    const footer = this.document.querySelector('app-footer');
    const body = this.document.querySelector('body');

    this.renderer.removeStyle(nav, 'display');
    this.renderer.removeStyle(footer, 'display');
    this.renderer.removeClass(body, 'pink-skin');
  }

}

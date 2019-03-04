import { Component, OnInit, Renderer2, Inject, RendererStyleFlags2, OnDestroy, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-h-s-n-f-n',
  templateUrl: './h-s-n-f-n.component.html',
  styleUrls: ['./h-s-n-f-n.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HSNFNComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    const nav = this.document.querySelector('app-nav');
    const footer = this.document.querySelector('app-footer');
    const containerFluid = this.document.querySelector('.container-fluid');
    const body = this.document.querySelector('body');

    if (this.sharedService.navHideNavAndFooter()) {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(footer, 'display', 'none');
      this.renderer.setStyle(containerFluid, 'padding-left', '0', RendererStyleFlags2.Important);
      this.renderer.setStyle(containerFluid, 'padding-right', '0', RendererStyleFlags2.Important);
      this.renderer.addClass(body, 'light-blue-skin');
    }
  }

  ngOnDestroy() {
    const nav = this.document.querySelector('app-nav');
    const containerFluid = this.document.querySelector('.container-fluid');
    const footer = this.document.querySelector('app-footer');
    const body = this.document.querySelector('body');

    this.renderer.removeStyle(nav, 'display');
    this.renderer.removeStyle(footer, 'display');
    this.renderer.setStyle(containerFluid, 'padding-left', '15px', RendererStyleFlags2.Important);
    this.renderer.setStyle(containerFluid, 'padding-right', '15px', RendererStyleFlags2.Important);
    this.renderer.removeClass(body, 'light-blue-skin');
  }

}

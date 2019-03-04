
import { Component, OnInit, ViewEncapsulation, Renderer2, Inject, RendererStyleFlags2, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-intro-classic',
  templateUrl: './intro-classic.component.html',
  styleUrls: ['./intro-classic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroClassicComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    const nav = this.document.querySelector('app-nav');
    const html = this.document.querySelector('html');
    const footer = this.document.querySelector('app-footer');
    const containerFluid = this.document.querySelector('.container-fluid');

    if (this.sharedService.introHideNavAndFooter()) {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(footer, 'display', 'none');
      this.renderer.addClass(html, 'full-height');
      this.renderer.setStyle(containerFluid, 'padding-left', '0', RendererStyleFlags2.Important);
      this.renderer.setStyle(containerFluid, 'padding-right', '0', RendererStyleFlags2.Important);
    }
  }

  ngOnDestroy() {
    const nav = this.document.querySelector('app-nav');
    const html = this.document.querySelector('html');
    const body = this.document.querySelector('body');
    const containerFluid = this.document.querySelector('.container-fluid');
    const footer = body.firstElementChild.children[3];
    this.renderer.removeStyle(body, 'height');
    this.renderer.removeClass(html, 'full-page');
    this.renderer.removeStyle(nav, 'display');
    this.renderer.removeStyle(footer, 'display');
    this.renderer.setStyle(containerFluid, 'padding-left', '15px', RendererStyleFlags2.Important);
    this.renderer.setStyle(containerFluid, 'padding-right', '15px', RendererStyleFlags2.Important);
  }

}

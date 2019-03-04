import { Component, OnInit, ViewEncapsulation, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sticky-content',
  templateUrl: './sticky-content.component.html',
  styleUrls: ['./sticky-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StickyContentComponent implements OnInit, OnDestroy {
  footer: any;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.footer = this.document.querySelector('app-footer');
    this.renderer.addClass(this.footer, 'fixed-bottom');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.footer, 'fixed-bottom');
  }

}

import { Component, HostListener, Renderer2, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LightComponent implements AfterViewInit {

  @ViewChild('nav') nav: NavbarComponent;
  breakpoint = 992;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  transformDropdowns() {
    const dropdownMenu = Array.from(this.el.nativeElement.querySelectorAll('.dropdown-menu'));
    const navHeight = this.nav.navbar.nativeElement.clientHeight + 'px';
    dropdownMenu.forEach((dropdown) => {
      this.renderer.setStyle(dropdown, 'transform', `translateY(${navHeight})`);
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    const toggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const togglerIcon = this.el.nativeElement.querySelector('.navbar-toggler-icon');
    if (event.target === toggler || event.target === togglerIcon) {
      setTimeout(() => {
        this.transformDropdowns();
      }, 351);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > this.breakpoint) {
      this.transformDropdowns();
    }
  }

  ngAfterViewInit() {
    this.transformDropdowns();
  }

}

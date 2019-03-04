import { Component, AfterViewInit, ViewChild, Renderer2, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarkComponent implements AfterViewInit {

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

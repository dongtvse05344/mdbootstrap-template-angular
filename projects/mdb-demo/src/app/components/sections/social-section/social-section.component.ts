import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-social-section',
  templateUrl: './social-section.component.html',
  styleUrls: ['./social-section.component.scss']
})
export class SocialSectionComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let cardImg = this.el.nativeElement.querySelectorAll('mdb-card-img')[1];
    let img = cardImg.children[0];
    this.renderer.removeClass(img, 'img-fluid');
  }

}

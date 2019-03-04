import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extended-main',
  templateUrl: './extended-main.component.html',
  styleUrls: ['./extended-main.component.scss']
})
export class ExtendedMainComponent implements DoCheck {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Blog', description: 'On this page you will find basic examples of Angular Blog components', link: '/extended/blog' },
    { id: 2, name: 'Flipping Cards', description: 'On this page you will find basic examples of Angular Flipping Cards', link: '/extended/flipping-cards' },
    { id: 3, name: 'Maps', description: 'On this page you will find basic examples of Angular Maps', link: '/extended/maps' },
    { id: 4, name: 'Social Buttons', description: 'On this page you will find basic examples of Angular Social Buttons', link: '/extended/social-buttons' },
    { id: 5, name: 'Steppers', description: 'On this page you will find basic examples of Angular Steppers', link: '/extended/steppers' },
    { id: 6, name: 'Facebook share button', description: 'On this page you will find basic examples of Facebook share button', link: '/extended/fb-share' },
    { id: 7, name: 'Facebook mixed share counter', description: 'On this page you will find basic examples of Facebook share button', link: '/extended/fb-share-mixed' },
    { id: 8, name: 'Facebook share counter with removed parameters', description: 'On this page you will find basic examples of Facebook share counter with removed parameters', link: '/extended/fb-share-parameters' },
    { id: 9, name: 'Facebook like counter', description: 'On this page you will find basic examples of Facebook like counter button', link: '/extended/fb-like' },


  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }


}

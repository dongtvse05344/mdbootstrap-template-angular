import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sections-main',
  templateUrl: './sections-main.component.html',
  styleUrls: ['./sections-main.component.scss']
})
export class SectionsMainComponent implements DoCheck, OnInit {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Blog Section', description: 'On this page you will find basic examples of Angular Blog Sections', link: '/sections/blog' },
    { id: 2, name: 'Contact Section', description: 'On this page you will find basic examples of Angular Contact Sections', link: '/sections/contact' },
    { id: 3, name: 'E-commerce Section', description: 'On this page you will find basic examples of Angular E-commerce Sections', link: '/sections/e-commerce' },
    { id: 4, name: 'Features Section', description: 'On this page you will find basic examples of Angular Features Sections', link: '/sections/features' },
    { id: 6, name: 'Magazine Section', description: 'On this page you will find basic examples of Angular Magazine Sections', link: '/sections/magazine' },
    { id: 7, name: 'Projects Section', description: 'On this page you will find basic examples of Angular Projects Sections', link: '/sections/projects' },
    { id: 8, name: 'Social Section', description: 'On this page you will find basic examples of Angular Social Sections', link: '/sections/social' },
    { id: 9, name: 'Team Section', description: 'On this page you will find basic examples of Angular Team Sections', link: '/sections/team' },
    { id: 10, name: 'Testimonials Section', description: 'On this page you will find basic examples of Angular Testimonials Sections', link: '/sections/testimonials' }
  ];

  introsArray = [
    { id: 1, name: 'App Intro', description: 'On this page you will find Angular App Intro', link: '/sections/intros/app' },
    { id: 2, name: 'Contact Form Intro', description: 'On this page you will find Angular Contact Form Intro', link: '/sections/intros/contact' },
    { id: 3, name: 'CTA Intro', description: 'On this page you will find Angular CTA Intro', link: '/sections/intros/cta' },
    { id: 4, name: 'Parallax Effect Intro', description: 'On this page you will find Angular Parallax Effect Intro', link: '/sections/intros/parallax' },
    { id: 5, name: 'Classic Form Intro', description: 'On this page you will find Angular Classic Form Intro', link: '/sections/intros/classic' },
    { id: 6, name: 'Video Intro', description: 'On this page you will find Angular Video Intro', link: '/sections/intros/video' },
    { id: 7, name: 'Minimalistic Form Intro', description: 'On this page you will find Angular Minimalistic Form Intro', link: '/sections/intros/minimalistic' }
  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

  ngOnInit() {
  }

}

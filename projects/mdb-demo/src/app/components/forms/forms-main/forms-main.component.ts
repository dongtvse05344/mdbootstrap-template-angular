import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-main',
  templateUrl: './forms-main.component.html',
  styleUrls: ['./forms-main.component.scss']
})
export class FormsMainComponent implements DoCheck {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Autocomplete', description: 'On this page you will find examples of Angular Autocomplete', link: '/forms/autocomplete' },
    { id: 2, name: 'Checkbox', description: 'On this page you will find examples of Angular Checkbox', link: '/forms/checkbox' },
    { id: 3, name: 'Date Picker', description: 'On this page you will find examples of Angular Date Picker', link: '/forms/datepicker' },
    { id: 4, name: 'Forms', description: 'On this page you will find examples of Angular Forms', link: '/forms/forms' },
    { id: 5, name: 'Inputs', description: 'On this page you will find examples of Angular Inputs', link: '/forms/inputs' },
    { id: 6, name: 'Input groups', description: 'On this page you will find examples of Angular Input Groups', link: '/forms/input-group' },
    { id: 7, name: 'Input validation', description: 'On this page you will find examples of Angular Input Validation', link: '/forms/input-validation' },
    { id: 8, name: 'Multiselect', description: 'On this page you will find examples of Angular Multiselect', link: '/forms/multiselect' },
    { id: 9, name: 'Radio', description: 'On this page you will find examples of Angular Radio', link: '/forms/radio' },
    { id: 10, name: 'Search', description: 'On this page you will find examples of Angular Search', link: '/forms/search' },
    { id: 11, name: 'Select', description: 'On this page you will find examples of Angular Select', link: '/forms/select' },
    { id: 12, name: 'Slider', description: 'On this page you will find examples of Angular Slider', link: '/forms/slider' },
    { id: 13, name: 'Switch', description: 'On this page you will find examples of Angular Switch', link: '/forms/switch' },
    { id: 14, name: 'Textarea', description: 'On this page you will find examples of Angular Textarea', link: '/forms/textarea' },
    { id: 15, name: 'Time Picker', description: 'On this page you will find examples of Angular Time Picker', link: '/forms/timepicker' },
  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}

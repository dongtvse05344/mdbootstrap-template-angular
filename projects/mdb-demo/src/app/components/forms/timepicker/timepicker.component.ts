import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  lightClock: any;
  darkClock: any;
  constructor() { }

  ngOnInit() {
  }

}

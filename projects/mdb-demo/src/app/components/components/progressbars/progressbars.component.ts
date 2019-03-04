import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progressbars',
  templateUrl: './progressbars.component.html',
  styleUrls: ['./progressbars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressbarsComponent implements AfterViewInit {
  value = 0;
  
  ngAfterViewInit() {
    const loadingBar = setInterval(() => {
      this.value < 100 ? this.value++ : clearInterval(loadingBar);
    }, 50);
  }


}

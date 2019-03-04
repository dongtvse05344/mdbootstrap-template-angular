import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements AfterViewInit {
  model: any;
  modell: any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  public myDatePickerOptions: IMyOptions = {};

  ngAfterViewInit() {
    this.datePicker.addLocale({
      de: {
        dayLabels: { su: 'Son', mo: 'Mon', tu: 'Die', we: 'Mit', th: 'Don', fr: 'Fre', sa: 'Sam' },
        dayLabelsFull: { su: 'Sonntag', mo: 'Montag', tu: 'Dienstag', we: 'Mittwoch', th: 'Donnerstag', fr: 'Freitag', sa: 'Samstag' },
        monthLabels: {
          1: 'Jan', 2: 'Feb', 3: 'Mär', 4: 'Apr', 5: 'Mai', 6: 'Jun',
          7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Okt', 11: 'Nov', 12: 'Dez'
        },
        monthLabelsFull: {
          1: 'Januar', 2: 'Februar', 3: 'März', 4: 'April', 5: 'Mai', 6: 'Juni', 7: 'Juli',
          8: 'August', 9: 'September', 10: 'Oktober', 11: 'November', 12: 'Dezember'
        },
        dateFormat: 'dd mmmm yyyy',
        todayBtnTxt: 'Heute',
        clearBtnTxt: 'Klar',
        closeBtnTxt: 'Schließen',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
      }
    });
  }

}

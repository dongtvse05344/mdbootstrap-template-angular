import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  optionsSelect: Array<any>;
  iconOptionSelect: Array<any>;
  groupOptionsSelect: Array<any>;
  dateOptionsSelect = [
    { value: '1', label: 'Today', selected: true },
    { value: '2', label: 'Yesterday' },
    { value: '3', label: 'Last 7 days' },
    { value: '4', label: 'Last 30 days' },
    { value: '5', label: 'Last week' },
    { value: '6', label: 'Last month' }
  ];
  selectedValue = '1';

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    this.groupOptionsSelect = [
      { value: '', label: 'team 1', group: true },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '', label: 'team 2', group: true },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
    ];
    this.iconOptionSelect = [
      { value: '1', label: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
      { value: '2', label: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
      { value: '3', label: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' },
    ];
  }

  getArrayOfValues(event: any) {
    console.log('Array of selected values');
    console.log(event);
  }

  selectChanged(event: any) {
    console.log('selectChanged');
    console.log(event);
  }

  selectOpened(event: any) {
    console.log('selectOpened');
    console.log(event);
  }

  selectClosed(event: any) {
    console.log('selectClosed');
    console.log(event);
  }

  optionSelected(event: any) {
    console.log('optionSelected');
    console.log(event);
  }

  optionDeselected(event: any) {
    console.log('optionDeselected');
    console.log(event);
  }

  noOptionsFound(event: any) {
    console.log('noOptionsFound');
    console.log(event);
  }

}

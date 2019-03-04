import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs-pills',
  templateUrl: './tabs-pills.component.html',
  styleUrls: ['./tabs-pills.component.scss']
})
export class TabsPillsComponent {

  @ViewChild('staticTabs') public staticTabs: any;

  selectProfileTab() {
    this.staticTabs.setActiveTab(1);
  }

  selectFollowTab() {
    this.staticTabs.setActiveTab(2);
  }
  shown(event: any) {
    console.log('shown');
    console.log(event);
  }
  show(event: any) {
    console.log('show');
    console.log(event);
  }
  hide(event: any) {
    console.log('hide');
    console.log(event);
  }
  hidden(event: any) {
    console.log('hidden');
    console.log(event);
  }

}

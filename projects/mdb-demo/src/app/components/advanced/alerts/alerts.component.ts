import {AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
import { Http } from '@angular/http';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements AfterViewInit, OnDestroy {
  url: string = 'https://jsonplaceholder.typicode.com/users/';
  usersArray: Array<any> = [];
  getDataInterval: any;
  constructor(private toastrService: ToastService, private http: Http) { }

  showSuccess() {
    this.toastrService.success('Info message');
  }

  showError() {
    this.toastrService.error('Error message');
  }

  showInfo() {
    this.toastrService.info('Success message');
  }

  showWarning() {
    this.toastrService.warning('Warning message');
  }

  opacityShowSuccess() {
    const options = { toastClass: 'opacity' };
    this.toastrService.success('Success message description', 'Success message', options);
  }

  opacityShowError() {
    const options = { toastClass: 'opacity' };
    this.toastrService.error('Error message description', 'Error message', options);
  }

  opacityShowInfo() {
    const options = { toastClass: 'opacity' };
    this.toastrService.info('Info message description', 'Info message', options);
  }

  opacityShowWarning() {
    const options = { toastClass: 'opacity' };
    this.toastrService.warning('Warning message description', 'Warning message', options);
  }

  serverShowSuccess(data: any) {
    this.toastrService.success('User: ' + '"' + data.name + '"' + ' successfully fetched');
  }

  serverShowError(id: number) {
    this.toastrService.error("Error: User with ID: " + id + " doesn't exists");
  }

  connectionEnd(id: number) {
    this.toastrService.error('Connection ended after ' + id + ' calls');
  }

  getData(id: number) {
    return this.http.get(this.url + id);
  }

  ngAfterViewInit() {
    let i = 1;

    this.getDataInterval = setInterval(() => {
      this.getData(i).subscribe((response: any) => {
        response = response.json();
        this.usersArray.push(response.name);
        this.serverShowSuccess(response);
        i++;
      }, () => {
        if (i < 15) {
          this.serverShowError(i);
        } else {
          clearInterval(this.getDataInterval);
          this.connectionEnd(i);
        }
        i++;
      });
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

}

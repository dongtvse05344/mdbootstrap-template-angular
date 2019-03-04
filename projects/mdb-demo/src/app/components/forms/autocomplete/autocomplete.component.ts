import { Component } from '@angular/core';
import { CompleterData, CompleterService } from 'ng-uikit-pro-standard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  public dataRemote: CompleterData;
  remoteDataSearchStr: any;
  public searchStr: string;
  public dataService: CompleterData;
  public searchData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'yellow' },
    { color: 'black' },
  ];

  public ngModelSearchStr: string;
  public ngModelDataService: CompleterData;
  public ngModelSearchData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'yellow' },
    { color: 'black' },
  ];

  public initialValueDataService: CompleterData;
  public initialValueSearchData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'yellow' },
    { color: 'black' },
  ];
  public initialValueSearchStr: string = this.initialValueSearchData[0].color;

  public inputClassSearchStr: string;
  public inputClassDataService: CompleterData;
  public inputClassSearchData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'yellow' },
    { color: 'black' },
  ];

  constructor(public completerService: CompleterService, public http: Http) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
    this.ngModelDataService = completerService.local(this.ngModelSearchData, 'color', 'color');
    this.initialValueDataService = completerService.local(this.initialValueSearchData, 'color', 'color');
    this.inputClassDataService = completerService.local(this.inputClassSearchData, 'color', 'color');
    // tslint:disable-next-line:max-line-length
    this.dataRemote = completerService.remote('https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?', 'name', 'name');
  }

}

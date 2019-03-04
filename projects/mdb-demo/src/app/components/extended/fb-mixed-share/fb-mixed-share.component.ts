import { Http } from '@angular/http';
import { Component, AfterViewInit } from '@angular/core';
// import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-fb-mixed-share',
  templateUrl: './fb-mixed-share.component.html',
  styleUrls: ['./fb-mixed-share.component.scss']
})
export class FbMixedShareComponent implements AfterViewInit {

  shareCounter: number = 0;

  constructor( private http: Http) {
    // const initParams: InitParams = {
    //   appId: '263350547594130',
    //   xfbml: true,
    //   version: 'v3.1'
    // };
    // fb.init(initParams);
  }

  ngAfterViewInit() {
    const httpUrl = 'http://mdbootstrap.com';
    const httpsUrl = 'https://mdbootstrap.com';

    let httpShareCounter = 0;
    let httpsShareCounter = 0;

    // HTTP Share counter
    this.http.get('https://graph.facebook.com/?ids=' + `${httpUrl}`).subscribe((data: any) => {
      httpShareCounter = data.json()[`${httpUrl}`].share.share_count;
      console.log(httpShareCounter);
    });

    // HTTPS Share counter
    this.http.get('https://graph.facebook.com/?ids=' + `${httpsUrl}`).subscribe((data: any) => {
      httpsShareCounter += data.json()[`${httpsUrl}`].share.share_count;
      console.log(httpsShareCounter);
    });
    setTimeout(() => {
      this.shareCounter = httpShareCounter + httpsShareCounter;
      console.log(this.shareCounter);
    }, 500);
  }

}

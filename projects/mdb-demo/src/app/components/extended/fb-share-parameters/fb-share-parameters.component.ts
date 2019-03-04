import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-fb-share-parameters',
  templateUrl: './fb-share-parameters.component.html',
  styleUrls: ['./fb-share-parameters.component.scss']
})
export class FbShareParametersComponent implements OnInit {

  shareCounter: number = 0;

  constructor(private http: Http) {
    // const initParams: InitParams = {
    //   appId: '263350547594130',
    //   xfbml: true,
    //   version: 'v3.1'
    // };
    // fb.init(initParams);
  }

  ngOnInit() {
    let httpUrl = 'http://mdbootstrap.com/?parameter=true&other=false';
    let httpsUrl = 'https://mdbootstrap.com/?parameter=true&other=false';

    let httpShareCounter = 0;
    let httpsShareCounter = 0;

    const httpQuery = httpUrl.indexOf('?') || httpUrl.indexOf('&');
    const httpsQuery = httpUrl.indexOf('?') || httpUrl.indexOf('&');
    httpUrl = httpUrl.substring(0, httpQuery != -1 ? httpQuery : httpUrl.length);
    httpsUrl = httpsUrl.substring(0, httpsQuery != -1 ? httpsQuery : httpsUrl.length);

    // HTTP Share counter
    this.http.get('https://graph.facebook.com/?ids=' + `${httpUrl}`).subscribe((data: any) => {
      httpShareCounter = data.json()[`${httpUrl}`].share.share_count;
    });

    // HTTPS Share counter
    this.http.get('https://graph.facebook.com/?ids=' + `${httpsUrl}`).subscribe((data: any) => {
      httpsShareCounter += data.json()[`${httpsUrl}`].share.share_count;
    });
    setTimeout(() => {
      this.shareCounter = httpShareCounter + httpsShareCounter;
    }, 500);
  }

}

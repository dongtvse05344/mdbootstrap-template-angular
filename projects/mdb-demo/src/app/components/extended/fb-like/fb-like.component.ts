import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-fb-like',
  templateUrl: './fb-like.component.html',
  styleUrls: ['./fb-like.component.scss']
})
export class FbLikeComponent implements OnInit {

  likeCounter: number = 0;

  constructor(private http: Http) {
    // const initParams: InitParams = {
    //   appId: '263350547594130',
    //   xfbml: true,
    //   version: 'v3.1'
    // };
    // fb.init(initParams);
  }

  ngOnInit() {
    const httpUrl = 'http://mdbootstrap.com';
    const accessToken = '263350547594130|8-BgKFnUIUXPREH0UIzs3tC8i6Q';

    // Like counter
    this.http.get('https://graph.facebook.com/?ids=' + `${httpUrl}`
      + '&access_token=' + `${accessToken}`
      + '&fields=og_object{engagement}').subscribe((data: any) => {
        this.likeCounter = data.json()[`${httpUrl}`].og_object.engagement.count;
      });
  }

}

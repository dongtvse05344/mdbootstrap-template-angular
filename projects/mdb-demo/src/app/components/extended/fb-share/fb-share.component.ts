import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fb-share',
  templateUrl: './fb-share.component.html',
  styleUrls: ['./fb-share.component.scss']
})
export class FbShareComponent implements OnInit {

  shareCounter: number = 0;

  constructor(private fb: FacebookService, private http: Http) {
    const initParams: InitParams = {
      appId: '263350547594130',
      xfbml: true,
      version: 'v3.1'
    };
    fb.init(initParams);
  }

  share() {
    this.fb.ui({
      method: 'share',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': 'http://mdbootstrap.com/angular',
          'og:title': 'My favorite Angular site!',
          'og:site_name': 'This is my Angular share function',
          'og:description': 'This is share from my favorite Angular site!',
        }
      })
    }).then((data: any) => {
      console.log(data);
    }).catch((error: any) => {
      console.log(error);
    });
  }

  ngOnInit() {
    const httpUrl = 'http://www.mdbootstrap.com';

    this.http.get('https://graph.facebook.com/?ids=' + `${httpUrl}`).subscribe((data: any) => {
      this.shareCounter = data.json()[`${httpUrl}`].share.share_count;
    });
  }

}

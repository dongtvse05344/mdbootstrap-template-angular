import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(
    private globalService: GlobalService,
    private authGuardService: AuthService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.showLoader();


    this.globalService.requestEvent.emit(0);
    const token = this.authGuardService.getToken();
    request = token ? request.clone(
      {
        reportProgress: true,
        setHeaders: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    ) : request.clone({reportProgress: true});
    return next.handle(request)
      .do(
        (event: HttpEvent<any>) => {},
        (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.authGuardService.clearToken();
            this.globalService.isLogin = false;
            this.router.navigate(['login']);
          }
        }
      })
      .pipe(
        map((event: HttpEvent<any>) => {
          this.globalService.requestEvent.emit(event.type < 5 ? event.type * 25 : 100);
          return event;
        }),
        finalize(() => {
          this.globalService.requestEvent.emit(100);
          this.onEnd();
        })
      );
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }

}

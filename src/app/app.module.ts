
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { AccountingModule } from './accounting/accounting.module';
import { RequestInterceptorService } from './core/services/request-interceptor.service';

import {NgxMaskModule} from 'ngx-mask'
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ManagerModule,
    AuthModule,
    CoreModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AccountingModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(),
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),

  ],
  providers: [
    MDBSpinningPreloader,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },

  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

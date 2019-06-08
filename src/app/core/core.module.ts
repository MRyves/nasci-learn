import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiService, JwtService, UserService} from './services';
import {HttpTokenInterceptor} from './interceptors';
import {AuthGuard} from './services';

@NgModule({
  declarations: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}

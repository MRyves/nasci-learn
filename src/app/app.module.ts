import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeModule} from './home';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

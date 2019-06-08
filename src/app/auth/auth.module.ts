import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import {NoAuthGuard} from './no-auth.guard';
import { AuthComponent } from './auth.component';
import {SharedModule} from '../shared';

@NgModule({
  declarations: [AuthComponent],
  providers: [
    NoAuthGuard
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

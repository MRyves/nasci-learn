import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

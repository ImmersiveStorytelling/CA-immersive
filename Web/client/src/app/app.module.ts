import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {ShareDataService} from './Service/ShareData.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, routingComponents ],
  providers:    [ ShareDataService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}

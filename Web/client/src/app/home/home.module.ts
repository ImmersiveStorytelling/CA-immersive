import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app.routing';
import { HomeComponent }  from '../home/home.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ HomeComponent, routingComponents ],
  bootstrap:    [ HomeComponent ]
})

export class HomeModule {

}

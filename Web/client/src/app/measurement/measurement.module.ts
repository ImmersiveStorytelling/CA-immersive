import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app.routing';
import { MeasurementComponent }  from '../measurement/measurement.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ MeasurementComponent, routingComponents],
  bootstrap:    [ MeasurementComponent ]
})

export class MeasurementModule {

}

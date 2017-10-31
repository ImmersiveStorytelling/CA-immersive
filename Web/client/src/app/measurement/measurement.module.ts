import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MeasurementComponent }  from '../measurement/measurement.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MeasurementComponent],
  bootstrap:    [ MeasurementComponent ]
})

export class MeasurementModule {

}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app.routing';
import { ProjectComponent }  from '../project/project.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ ProjectComponent, routingComponents ],
  bootstrap:    [ ProjectComponent ]
})

export class ProjectModule {

}

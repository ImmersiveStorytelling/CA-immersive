import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectComponent }  from '../project/project.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProjectComponent ],
  bootstrap:    [ ProjectComponent ]
})

export class ProjectModule {

}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app.routing';
import { LoginComponent }  from '../login/login.component';
import {DataService} from '../Service/data.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ LoginComponent, routingComponents ],
  bootstrap:    [ LoginComponent ],
  providers:    [ DataService ]
})

export class LoginModule {

}

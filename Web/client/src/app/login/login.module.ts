import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from '../app.routing';
import { LoginComponent }  from '../login/login.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ LoginComponent, routingComponents ],
  bootstrap:    [ LoginComponent ]
})

export class LoginModule {

}

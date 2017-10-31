import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginDataService} from '../Service/loginData.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/login/login.component.html',
  providers: [ LoginDataService ]
})

export class LoginComponent  {

  constructor(private router: Router, private _loginServiceData: LoginDataService) { }

  loginClick= function () {
    // als geverifierd
    // dan => this.navigateToHomeComponent();
    // als fout
    // dan error

    // test => OK
    console.log(this._loginServiceData.getData());
  };

  signupClick= function () {
    // als velden ingevuld en button klik
    // dan data pushen naar database
    // als dan data in database
    // dan => (methode hier onder)
    this.navigateToHomeComponent();
  };


  // inline methods
  private navigateToHomeComponent() {
    // data van specifieke user doorgeven
    this.router.navigateByUrl('/home');
  }

}

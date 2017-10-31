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
    // this.router.navigateByUrl('/home');
    console.log(this._loginServiceData.getData());
  };

  signupClick= function () {
    // this.router.navigateByUrl('/home');
  };

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl:'app/login/login.component.html'
})

export class LoginComponent  {

  constructor(private router: Router) { }

  loginClick= function () {
    this.router.navigateByUrl('/home');
  };

  signupClick= function () {
    this.router.navigateByUrl('/home');
  };

}

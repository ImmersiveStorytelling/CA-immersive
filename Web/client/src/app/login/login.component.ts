import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../Service/data.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/login/login.component.html',
})

export class LoginComponent  {

  constructor(private router: Router/*, private _dataService: DataService*/) { }

  loginClick= function () {
    // this.router.navigateByUrl('/home');
    console.log('getData');
  };

  signupClick= function () {
    // this.router.navigateByUrl('/home');
  };

}

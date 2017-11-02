import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataService } from '../Service/loginData.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import '../interfaces/User.interface';


@Component({
  selector: 'my-app',
  templateUrl: 'app/login/login.component.html',
  providers: [ LoginDataService ]
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private _loginServiceData: LoginDataService) { }

  signInUsername:string;
  signInPassword:string;

  listOfUsers: Observable<User[]>;

  ngOnInit(): void {
      this.listOfUsers = this._loginServiceData.getData().do(response => this.listOfUsers = Observable.of(response));
  }

  loginClick= function () {
    // als geverifieerd
    // dan => this.navigateToHomeComponent();
    // als fout
    // dan error

    // test => OK
    /*switch(this._loginServiceData.getData(usr, passw)) {
        case 0: console.log("Logged in"); break;
        case 1: console.log("Password not correct for this username"); break;
        case 2: console.log("Username does not exist"); break;
    }*/
    console.log(this.listOfUsers);
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
    this.router.navigateByUrl('/home');
  }

}

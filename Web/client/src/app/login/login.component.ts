import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataService } from '../Service/loginData.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import '../interfaces/IUser.interface';
import {GenerateRandom} from "../Model/GenerateRandom";


@Component({
  selector: 'my-app',
  templateUrl: 'app/login/login.component.html',
  providers: [ LoginDataService ]
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private _loginServiceData: LoginDataService) { }

  signInUsername:string;
  signInPassword:string;
  loginStatus:number;
  signupStatus:number;

  listOfUsers: IUser[];

  ngOnInit(): void {
      this._loginServiceData.getUsers().subscribe(response => this.listOfUsers = response);
  }

  loginClick(usr:string, pass:string) {
    for(let u of this.listOfUsers){
      if(u.userID == usr && u.password == pass){
        this.loginStatus = 0;
        break;
      }
      else if(u.userID == usr){
        this.loginStatus = 1;
        break;
      }
      else
        this.loginStatus = 2;
    }

    switch(this.loginStatus) {
        case 0: this.navigateToHomeComponent(); break;
        case 1: alert("Password not correct for this username"); break;
        case 2: alert("Username does not exist"); break;
    }
  };

  signupClick(usr:string, pass:string) {
    if(usr.length > 20)
      alert("A username can only be 20 characters long. Yours is " + usr.length + ".");
    else if(pass.length < 8)
      alert("A password must be 8 characters long. Yours is " + pass.length + ".");
    else {
      for(let u of this.listOfUsers){
        if(u.userID == usr){
          this.signupStatus = 0;
          break;
        }
        else
          this.signupStatus = 1;
      }

      if(pass == "")
        this.signupStatus = 2;

      let id = 0;

      for(let u of this.listOfUsers){
        if(u.id > id)
          id = u.id;
      }

      id++;

      switch(this.signupStatus){
        case 0: alert("This username is already taken"); break;
        case 1: this._loginServiceData.createUser(usr, pass, id); this.navigateToHomeComponent(); break;
        case 2: alert("You can't use an empty password.");
      }
    }
  };


  // inline methods
  private navigateToHomeComponent() {
    // data van specifieke user doorgeven
    this.router.navigateByUrl('/home');
  }

}

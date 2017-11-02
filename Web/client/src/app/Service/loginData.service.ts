import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import '../interfaces/IUser.interface';
import {User} from "../Model/UserModel";

@Injectable()
export class LoginDataService {

  url = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}
  // Hier alle nodige REST API calls:

  getUsers(): Observable<IUser[]>  {
    return this.http.get<IUser[]>(this.url)
      .map(
        (res => {
          console.log(res);
          return <IUser[]>res;
        }
      ));
  }

  createUser(username: string, password:string, id:number) {
    let u = new User();
    u.id = id;
    u.userID = username;
    u.password = password;

    console.log(u);

    this.http.post(this.url, u).subscribe();
  }
}

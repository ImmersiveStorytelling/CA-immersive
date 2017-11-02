import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import '../interfaces/User.interface';

@Injectable()
export class LoginDataService {

  url = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}
  // Hier alle nodige REST API calls:

  getData(): Observable<User[]>  {
    return this.http.get<User[]>(this.url)
      .map(
        (res => {
          return <User[]>res
        }
      ));
  }

  /*getData():Observable<any>{
    console.log("Here");
    return this.http.get(this.url).map((response:Response) => response.json());
  }*/
}

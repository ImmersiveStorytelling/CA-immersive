import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class LoginDataService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClientModule) {}

  getData() {
    return 'DATAA';
    /*this.http.get<User>(this.url).subscribe(res => {
      // this.users = res;
      console.log(res);
    });*/
  }

}

interface User {
  userID: string;
  password: string;
}

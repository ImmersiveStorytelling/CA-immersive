import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class LoginDataService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClientModule) {}

  // Hier alle nodige REST API calls:

  getData() {
    return 'DATA LOGIN';
    /*this.http.get<User>(this.url).subscribe(res => {
      // this.users = res;
      console.log(res);
    });*/
  }

}

// hier interfaces, vb:
interface User {
  userID: string;
  password: string;
}

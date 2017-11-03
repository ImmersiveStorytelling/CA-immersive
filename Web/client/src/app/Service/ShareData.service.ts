import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class ShareDataService {
  subscription: Subscription;
  private subject = new Subject<any>();

  setString (data: string) {
    this.subject.next({text: data});
  }
  clearString() {
    this.subject.next();
  }
  getString (): Observable<any> {
    console.log('out service: ' + this.subject);
    return this.subject.asObservable();
  }
}

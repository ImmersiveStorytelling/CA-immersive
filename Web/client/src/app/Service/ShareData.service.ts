import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ShareDataService {
  private subject = new Subject<any>();

  setString (data: string) {
    this.subject.next({text: data});
  }
  clearString() {
    this.subject.next();
  }
  getString (): Observable<any> {
    return this.subject.asObservable();
  }
}

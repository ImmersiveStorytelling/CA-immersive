import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ShareDataService {
  private subject = new BehaviorSubject<any>('no value');

  setString (data: string) {
    this.subject.next({text: data});
    // console.log(`service setString: ${data}`);
    console.log('service setString: ');
    console.log(this.subject.getValue());
  }
  clearString() {
    this.subject.next('no value');
  }
  getString (): Observable<any> {
    console.log('service getString: ');
    console.log(this.subject.getValue());
    return this.subject.asObservable();
  }
}

import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class ShareDataService {
  subscription: Subscription;
  private subject = new Subject<any>();
  projectName: string;

  setString (data: string) {
    this.subject.next({text: data});
    //this.subscription = this.getString().subscribe(res => this.projectName = res );
    console.log('in service setString methode: ' + this.projectName);
  }
  clearString() {
    this.subject.next();
  }
  getString (): Observable<any> {
    console.log('out service: ' + this.subject);
    return this.subject.asObservable();
  }
}

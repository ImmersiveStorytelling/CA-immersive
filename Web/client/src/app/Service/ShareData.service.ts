import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {
  private subject = new BehaviorSubject<any>('no value');

  setString (data: string) {
    this.subject.next(data);
  }
  clearString() {
    this.subject.next('no value');
  }
  getString (): Observable<any> {
    return this.subject.asObservable();
  }
}

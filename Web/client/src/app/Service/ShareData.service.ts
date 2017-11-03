import {Injectable} from '@angular/core';

@Injectable()
export class ShareDataService {
  public sharedData: string;

  constructor() {
    this.sharedData = 'String from myService';
  }

  setData (data: string) {
    this.sharedData = data;
  }
  getData () {
    return this.sharedData;
  }
}

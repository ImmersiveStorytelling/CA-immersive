import {Injectable} from '@angular/core';

@Injectable()
export class ShareDataService {
  str: string;

  setString (data: string) {
    this.str = data;
  }

  getString(): Promise<string> {
    return Promise.resolve(this.str);
  }
}

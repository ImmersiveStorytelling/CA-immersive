import { Component } from '@angular/core';
import {ShareDataService} from "./Service/ShareData.service";

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent  {

  constructor(public sharedDataService: ShareDataService) { }

}

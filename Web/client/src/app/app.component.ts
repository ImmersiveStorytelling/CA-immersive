import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><p>And you live in {{woonplaats}}</p>`,
  templateUrl:'app/UrlTemplates/app.component.html'
})
export class AppComponent  {
  name = 'User';
  woonplaats:string = "Antwerp";
}

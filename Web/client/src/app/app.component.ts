import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><p>And you live in {{woonplaats}}</p>`,
})
export class AppComponent  {
  name = 'User';
  woonplaats:string = "Antwerp";
}

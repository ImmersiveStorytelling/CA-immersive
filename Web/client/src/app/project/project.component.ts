import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl:'app/project/project.component.html'
})

export class ProjectComponent  {

  constructor(private router: Router) { }

  measurementClick= function () {
    this.router.navigateByUrl('/measurement');
  };

  goBackClick= function () {
    this.router.navigateByUrl('/home');
  }

}

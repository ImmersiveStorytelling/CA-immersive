import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'measurement',
  templateUrl:'app/measurement/measurement.component.html'
})

export class MeasurementComponent  {

  constructor(private router: Router) { }

  goBackClick= function () {
    this.router.navigateByUrl('/project');
  };

}

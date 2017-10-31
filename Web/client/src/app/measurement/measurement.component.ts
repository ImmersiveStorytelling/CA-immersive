import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MeasurementDataService} from "../Service/measurementData.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/measurement/measurement.component.html',
  providers: [ MeasurementDataService ]
})

export class MeasurementComponent implements OnInit {

  constructor(private router: Router, private _measurementDataService: MeasurementDataService) { }

  ngOnInit(): void {
    // alle measurement data laden

    // test => OK
    console.log(this._measurementDataService.getData());
  }

  goBackClick= function () {
    this.router.navigateByUrl('/project');
  };

}

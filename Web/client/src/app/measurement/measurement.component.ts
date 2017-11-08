import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MeasurementDataService} from "../Service/measurementData.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import '../interfaces/IParameter.interface';
import '../interfaces/IUnit.interface';

@Component({
  selector: 'my-app',
  templateUrl: 'app/measurement/measurement.component.html',
  providers: [ MeasurementDataService ]
})

export class MeasurementComponent implements OnInit {

  listOfParameters: Observable<IParameter[]>;
  listOfUnits: Observable<IUnit[]>;

  constructor(private router: Router, private _measurementDataService: MeasurementDataService) { }

  ngOnInit(): void {
    this._measurementDataService.getUnits().subscribe(res => this.listOfUnits = Observable.of(res));
    this.listOfParameters = this._measurementDataService.getParameters("mID10").do(response => this.listOfParameters = Observable.of(response));
  }

  goBackClick= function () {
    this.router.navigateByUrl('/project');
  };
}

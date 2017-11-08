import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import '../interfaces/IParameter.interface';
import '../interfaces/IUnit.interface';

@Injectable()
export class MeasurementDataService {

  urlParameters = 'http://localhost:4000/parameters?measurementID=';
  urlUnits = 'http://localhost:4000/units';

  constructor(private http: HttpClient) {}

  getParameters(mID:string): Observable<IParameter[]> {
    return this.http.get<IParameter[]>(this.urlParameters + mID).map(response => {console.log(response); return <IParameter[]>response;});
  }

  getUnits(): Observable<IUnit[]> {
    return this.http.get<IUnit[]>(this.urlUnits).map(res => {console.log(res); return <IUnit[]>res;});
  }

}

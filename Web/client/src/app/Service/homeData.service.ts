import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../interfaces/Project.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HomeDataService {

  url = 'http://localhost:4000';
  urlProjects = this.url + '/projects';

  constructor(private http: HttpClient) {}

  // Hier alle nodige REST API calls:
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects).map(res => {
      return <Project[]>res;
    });
  }
}


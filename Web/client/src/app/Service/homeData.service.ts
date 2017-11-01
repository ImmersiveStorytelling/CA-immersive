import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../interfaces/Project.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeDataService {

  urlUsers = 'http://localhost:4000/users';
  urlProjects = 'http://localhost:4000/projects';

  listProjects: Project[];

  constructor(private http: HttpClient) {}

  // Hier alle nodige REST API calls:

  getProjectsFrom(/*user*/)/*: Observable<Project[]>*/ {
    this.http.get<Project[]>(this.urlProjects).subscribe(res => {
      this.listProjects = res;
      console.log('Vanuit Service: ' + this.listProjects);
    });
    // return this.listProjects;
    return Observable.interval(1000).map(i => this.listProjects);
  }

}


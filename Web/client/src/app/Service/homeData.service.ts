import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import '../interfaces/IProject.interface';
import {Project} from '../Model/ProjectModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeDataService {

  url = 'http://localhost:4000';
  urlProjects = this.url + '/projects';
  bool = false;

  constructor(private http: HttpClient) {}

  // Hier alle nodige REST API calls:
  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.urlProjects).map(response => {
      return <IProject[]>response;
    });
  }

  postProject(projectName: string): Observable<boolean> {
    let dummyProject = new Project();
    dummyProject.id = 26;
    dummyProject.name = projectName;
    dummyProject.apikey = projectName + '1';

    console.log(dummyProject.name + dummyProject.apikey);

    this.http.post(this.urlProjects, dummyProject).subscribe(
      response => { return true; },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    return Observable.of(this.bool);
  }
}


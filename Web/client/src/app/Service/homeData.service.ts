import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import '../interfaces/IProject.interface';
import {Project} from '../home/Model/ProjectModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeDataService {

  url = 'http://localhost:4000';
  urlProjects = this.url + '/projects';

  constructor(private http: HttpClient) {}

  // Hier alle nodige REST API calls:
  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.urlProjects).map(response => {
      return <IProject[]>response;
    });
  }

  postProject(projectName: string): Observable<number> {
    let dummyProject = new Project();
    dummyProject.id = 13;
    dummyProject.name = projectName;
    dummyProject.apikey = projectName + '1';

    console.log(dummyProject.name + dummyProject.apikey);

    this.http.post(this.urlProjects, dummyProject).subscribe(response => {
      console.log(response);
      return 1;
    }, (err: HttpErrorResponse) => {
      console.log(err.error);
      console.log(err.name);
      console.log(err.message);
      console.log(err.status);
    });
    return Observable.of(0);
  }
}


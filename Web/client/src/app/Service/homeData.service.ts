import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  postProject(projectName: string)/*: Observable<boolean>*/ {
    let dummyProject = new Project();
    dummyProject.name = projectName;
    dummyProject.apikey = projectName + '1';

    console.log(dummyProject.name + dummyProject.apikey);

    /*return this.http.post<Project[]>(this.urlProjects).map(response => {
      return <Project[]>response;
    });*/
  }
}


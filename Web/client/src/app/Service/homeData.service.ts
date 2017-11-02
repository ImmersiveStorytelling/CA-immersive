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

  postProject(projectName: string): Observable<any> {
    let dummyProject = new Project();
    dummyProject.id = 10;
    dummyProject.name = projectName;
    dummyProject.apikey = projectName + dummyProject.id;

    console.log(dummyProject.name + dummyProject.apikey);

    return this.http.post(this.urlProjects, dummyProject);
  }

  deleteProject(project: Project): Observable<any> {
    console.log("delete: " + project.apikey);

    /////////// om te deleleten => ID naar APIKEY veranderen
    return this.http.delete(this.urlProjects + '/' + project.id);
  }
}


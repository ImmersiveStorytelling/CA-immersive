import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeDataService} from '../Service/homeData.service';
import '../interfaces/IProject.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.component.html',
  providers: [ HomeDataService ]
})

export class HomeComponent implements OnInit {

  listProjects: Observable<IProject[]>;

  constructor(private router: Router, private _homeDataService: HomeDataService) { }

  ngOnInit(): void {
    this.listProjects = this._homeDataService.getProjects().do(
      response => this.listProjects = Observable.of(response)
    );
  }

  projectClick() {
    // stuur dit project door voor specifieke data op te vragen?
    this.navigateToProjectComponent();
  };

  submitProjectClick(projectName: string) {
    // als veld ingevuld en button klik
    // dan data pushen naar database
    // als dan data in database
    // dan =>

    //let projectMade = false;

    this._homeDataService.postProject(projectName);
    //projectMade = this._homeDataService.postProject(projectName).do(
      //response => projectName = Observable.of(response)
    //);
    // this.navigateToProjectComponent();
  };

  // inline methods
  navigateToProjectComponent() {
    this.router.navigateByUrl('/project');
  }
}

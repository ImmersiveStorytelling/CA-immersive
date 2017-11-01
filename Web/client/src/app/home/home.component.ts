import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeDataService} from '../Service/homeData.service';
import '../interfaces/Project.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.component.html',
  providers: [ HomeDataService ]
})

export class HomeComponent implements OnInit {

  // listProjects: Project[];
  listProjects: Observable<Array<Project>>;

  constructor(private router: Router, private _homeDataService: HomeDataService) { }

  ngOnInit(): void {
    // laden van alle projecten van deze persoon
    this.listProjects = this._homeDataService.getProjectsFrom();
    console.log('Vanuit component:' + this.listProjects);
  }

  projectClick= function () {
    // stuur dit project door voor specifieke data op te vragen?
    this.navigateToProjectComponent();
  };

  submitProjectClick= function () {
    // als veld ingevuld en button klik
    // dan data pushen naar database
    // als dan data in database
    // dan =>
    this.navigateToProjectComponent();
  };

  // inline methods
  private navigateToProjectComponent() {
    this.router.navigateByUrl('/project');
  }
}

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeDataService} from '../Service/homeData.service';
import '../interfaces/IProject.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.component.html',
  providers: [ HomeDataService ]
})

export class HomeComponent implements OnInit {

  listProjects: Observable<IProject[]>;

  constructor(private router: Router, private _homeDataService: HomeDataService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  projectClick() {
    // stuur dit project door voor specifieke data op te vragen?
    this.navigateToProjectComponent();
  };

  submitProjectClick(projectName: string) {
    this._homeDataService.postProject(projectName).subscribe( res =>
      this.getProjects());
  }

  // inline methods
  private getProjects() {
    this.listProjects = this._homeDataService.getProjects().do(
      response => this.listProjects = Observable.of(response)
    );
  }

  navigateToProjectComponent() {
    this.router.navigateByUrl('/project');
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectDataService} from '../Service/projectData.service';
import {ShareDataService} from '../Service/ShareData.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/project/project.component.html',
  providers: [ ProjectDataService ]
})

export class ProjectComponent implements OnInit, OnDestroy {

  projectName: any;

  constructor(private router: Router, private _projectDataService: ProjectDataService, public _shareDataService: ShareDataService) {
    this._shareDataService.getString().then(res => {this.projectName = res; console.log(res);});
  }

  ngOnInit(): void {
    // alle measurements laden (met timestamp)

    // alle contributors van database voor dit project ophalen
    //this._shareDataService.subject.subscribe(response => console.log("test"));
  }

  ngOnDestroy() {
  }

  measurementClick= function () {
    // data van geklikte measurement doorsturen om in volgende compenent de juiste parameters te laden
    this.router.navigateByUrl('/measurement');
  };

  addContributor= function () {
    // als veld ingevuld en button click
    // dan nieuwe contributor naar database opslagen
    // als op database opgeslagen
    // dan lijst met contributers refreshen
  };

  deleteContributor= function () {
    // als op delete knop van contributer wordt geklikt
    // dan contributor uit database verwijderen
    // als verwijderd
    // dan lijst met contributors refreshen
  };

  goBackClick= function () {
    this.router.navigateByUrl('/home');
  };

}

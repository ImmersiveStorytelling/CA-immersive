import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectDataService} from '../Service/projectData.service';
import {ShareDataService} from '../Service/ShareData.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/project/project.component.html',
  providers: [ ProjectDataService ]
})

export class ProjectComponent implements OnInit {

  projectApikey: string;

  constructor(private router: Router, private _projectDataService: ProjectDataService, private _shareDataService: ShareDataService) {
    this.projectApikey = this._shareDataService.getData();
    console.log(this.projectApikey);
  }

  ngOnInit(): void {
    // alle measurements laden (met timestamp)

    // alle contributors van database voor dit project ophalen

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

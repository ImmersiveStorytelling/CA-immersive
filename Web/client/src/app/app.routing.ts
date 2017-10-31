import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { HomeComponent} from "./home/home.component";
import { MeasurementComponent} from "./measurement/measurement.component";
import { ProjectComponent} from "./project/project.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'measurement', component: MeasurementComponent},
  { path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomeComponent, MeasurementComponent, ProjectComponent];



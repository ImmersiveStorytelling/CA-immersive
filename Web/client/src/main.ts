import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//login module
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

//login module
import { LoginModule } from './app/login/login.module';
platformBrowserDynamic().bootstrapModule(LoginModule);

//home module
import { HomeModule } from './app/home/home.module';
platformBrowserDynamic().bootstrapModule(HomeModule);

//measurement module
import { MeasurementModule } from './app/measurement/measurement.module';
platformBrowserDynamic().bootstrapModule(MeasurementModule);

//project module
import { ProjectModule } from './app/project/project.module';
platformBrowserDynamic().bootstrapModule(ProjectModule);

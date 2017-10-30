import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app module
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

//login module
import { LoginModule } from './app/login/login.module';
platformBrowserDynamic().bootstrapModule(LoginModule);

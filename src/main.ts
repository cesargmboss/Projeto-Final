import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes'; 
import { provideRouter } from '@angular/router';

import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) 
  ]
}).catch(err => console.error(err));
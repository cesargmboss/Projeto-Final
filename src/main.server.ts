import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server'; 
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; 
import { bootstrapApplication } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ],
};

export const config: ApplicationConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    ...serverConfig.providers!,
  ],
};

export default function render() {
  return bootstrapApplication(AppComponent, config);
}
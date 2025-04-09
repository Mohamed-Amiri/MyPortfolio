import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeTsComponent } from './app/app.component';

bootstrapApplication(HomeTsComponent, appConfig)
  .catch((err) => console.error(err));

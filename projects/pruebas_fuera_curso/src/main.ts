import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MenuComponent } from './app/menu/menu.component';
import { BalconComponent } from './app/habitaciones/balcon/balcon.component';

bootstrapApplication(BalconComponent, appConfig)
  .catch((err) => console.error(err));

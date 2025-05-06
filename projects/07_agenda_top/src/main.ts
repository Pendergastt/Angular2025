import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ContactosComponent } from './app/contactos/contactos.component';

bootstrapApplication(ContactosComponent, appConfig)
  .catch((err) => console.error(err));

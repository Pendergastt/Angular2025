import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TablaProvinciasComponent } from './app/tabla-provincias/tabla-provincias.component';

bootstrapApplication(TablaProvinciasComponent, appConfig)
  .catch((err) => console.error(err));

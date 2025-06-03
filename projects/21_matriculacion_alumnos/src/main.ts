import { MatricularComponent } from './app/components/matricular/matricular.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(MatricularComponent, appConfig)
  .catch((err) => console.error(err));

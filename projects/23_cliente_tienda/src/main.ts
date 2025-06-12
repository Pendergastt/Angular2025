import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductosComponent } from './app/component/productos/productos.component';

bootstrapApplication(ProductosComponent, appConfig)
  .catch((err) => console.error(err));

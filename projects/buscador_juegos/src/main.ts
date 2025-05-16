import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BuscadorComponent } from './app/buscador/buscador.component';
import { UsuariosComponenteComponent } from './app/usuarios-componente/usuarios-componente.component';

bootstrapApplication(UsuariosComponenteComponent, appConfig)
  .catch((err) => console.error(err));

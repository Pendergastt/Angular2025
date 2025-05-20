import { Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { EliminacionComponent } from './eliminacion/eliminacion.component';
import { BuscadorComponent } from './buscador/buscador.component';

export const routes: Routes = [
{path:"buscar",
  component:BuscadorComponent
},
{path:"alta",
  component:AltaComponent
},
{path:"eliminar",
  component:EliminacionComponent
},

];

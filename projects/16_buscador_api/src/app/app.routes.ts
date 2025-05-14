import { Routes } from '@angular/router';
import { EliminarComponent } from './componente/eliminar/eliminar.component';
import { NuevoItemComponent } from './componente/nuevo-item/nuevo-item.component';
import { BuscarComponent } from './componente/buscar/buscar.component';

export const routes: Routes = [
{
  path:"buscar",
  component:BuscarComponent
},
{
  path:"eliminar",
  component:EliminarComponent
},
{
  path:"nuevo",
  component:NuevoItemComponent
},



];

import { Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListacompletaComponent } from './components/listacompleta/listacompleta.component';

export const routes: Routes = [
  {
    path:"buscar",
    component:BusquedaComponent
  },

  {
    path:"registro",
    component:RegistroComponent
  },
  {
    path:"todos",
    component:ListacompletaComponent
  }


];

import { Routes } from '@angular/router';
import { BalconComponent } from './habitaciones/balcon/balcon.component';
import { CocinaComponent } from './habitaciones/cocina/cocina.component';
import { ComedorComponent } from './habitaciones/comedor/comedor.component';
import { HabitacionComponent } from './habitaciones/habitacion/habitacion.component';
import { RecibidorComponent } from './habitaciones/recibidor/recibidor.component';
import { SotanoComponent } from './habitaciones/sotano/sotano.component';
import { VestibuloComponent } from './habitaciones/vestibulo/vestibulo.component';

export const routes: Routes = [
  {
    path:"balcon",
    component:BalconComponent
  },

  {
    path:"cocina",
    component:CocinaComponent
  },

  {
    path:"comedor",
    component:ComedorComponent
  },

  {
    path:"habitacion",
    component:HabitacionComponent
  },

  {
    path:"recibidor",
    component:RecibidorComponent
  },

  {
    path:"sotano",
    component:SotanoComponent
  },

  {
    path:"vestibulo",
    component:VestibuloComponent
  },

];

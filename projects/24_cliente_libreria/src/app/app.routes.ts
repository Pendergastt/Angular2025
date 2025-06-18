import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComprasComponent } from './components/compras/compras.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
  {path:"compras", component:ComprasComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"login", component:UsuarioComponent}
];

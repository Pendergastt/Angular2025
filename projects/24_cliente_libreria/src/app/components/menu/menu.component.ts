import { RouterOutlet, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { UsuarioComponent } from "../usuario/usuario.component";

@Component({
  selector: 'app-menu',
  imports: [RouterModule, UsuarioComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}

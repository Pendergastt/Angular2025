import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Compra } from '../../model/Compra';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  constructor(private usuarioService:UsuariosService){

    this.usuarioService.consultarCompras().subscribe(data=>this.compras=data)
  }

compras:Compra[];



}

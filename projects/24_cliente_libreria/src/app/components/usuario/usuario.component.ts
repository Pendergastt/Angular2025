import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private usuariosService:UsuariosService){}

//Verificadores
usuarioCorrecto:Usuario;

//Variables
usuario:string;
password:string;
mensaje:string;

async validarUsuario(usuario:string,password:string){
  console.log(usuario,"|",password)
  let usuarioValidar:Usuario = new Usuario(usuario,password);
  this.usuariosService.verificarUsuario(usuarioValidar).subscribe(data=>{
    if(data){
      console.log(data)
      this.usuarioCorrecto=data;
      return this.mensaje="Usuario Correcto"
    } else {
      return this.mensaje="Usuario Incorrecto"}

    })
  }



}

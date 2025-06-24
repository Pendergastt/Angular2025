import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private usuariosService:UsuariosService){}


  usuario:string;
  password:string;
  email:string;
  mensaje:string;

login(form){
    if(form.invalid){
      alert("Los datos del formulario no son válidos!!!");
      return;
    }
    this.usuariosService.verificarUsuario(this.usuario,this.password)
    .subscribe(data=>{
      if(data){
        this.mensaje="Usuario válido";
      }else{
        this.mensaje="Usuario no válido";
      }
    });
  }
}

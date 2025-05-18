import { CommonModule } from '@angular/common';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { Comprobar } from '../model/comprobar';
import { ConsultaAPIService } from '../services/consulta-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-usuarios-componente',
  imports: [FormsModule,CommonModule],
  templateUrl: './usuarios-componente.component.html',
  styleUrl: './usuarios-componente.component.css'
})
export class UsuariosComponenteComponent {

  nombreUsuario:string;
  password:string;
  respuesta:boolean;


constructor(private consultaApi:ConsultaAPIService){}

loginUsuario(usuario:string,password:string){
  console.log(`usuario:${usuario}, contraseña:${password}`)
  this.respuesta=this.consultaApi.buscarUsuario(usuario,password);
  console.log(this.respuesta)

}



}

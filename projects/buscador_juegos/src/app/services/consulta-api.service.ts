import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAPIService {

constructor(private url:HttpClient){}

bdUsuarios:Usuario[]=[{"idUsuario":"0001",
    "nombre":"Luis",
    "apellido":"Ubeda",
    "nombreUsuario":"pendergastt",
    "password":"password1",
    "tipoUsuario":"admin",
    "correo":"penddergast@gmail.com",
    "direccion":"camarena",
    "telefono":679352384
},
{
  "idUsuario":"0002",
  "nombre":"Juan",
  "apellido":"Perez",
  "nombreUsuario":"JuanPe",
  "password":"password2",
  "tipoUsuario":"usuario",
  "correo":"juanpe@gmail.com",
  "direccion":"blabla",
  "telefono":98234
},
{
  "idUsuario":"0003",
  "nombre":"Pedro",
  "apellido":"Pil",
  "nombreUsuario":"PPil",
  "password":"password3",
  "tipoUsuario":"usuario",
  "correo":"pepil@gmail.com",
  "direccion":"lolos",
  "telefono":64565
}];
existe:boolean=false;

buscarUsuario(usuario:string,password:string):boolean{
  this.existe=false;
  for (let u of this.bdUsuarios){
    if (u.nombreUsuario==usuario&&u.password==password)
    this.existe=true
  }

  if (this.existe) {
    return this.existe;
  }
  else return this.existe;

}





}

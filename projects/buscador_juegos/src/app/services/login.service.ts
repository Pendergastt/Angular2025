import { Usuario } from './../model/usuario';
import { filter, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login:HttpClient) { }

  urlUsuarios:string="http://127.0.0.1:50261/"
  resultado:any;

  loginUsuario(usuario:string,password:string):Observable<Usuario>{

    console.log(`el usuario a mirar es ${usuario} y el password ${password}`);
    this.resultado= this.login.get(`${this.urlUsuarios}api/0?nombreUsuario=${usuario}&password=${password}`).pipe(
      map((u:Usuario)=>[u.nombreUsuario,u.password])
    );
    console.log(this.resultado)

      return this.resultado;

  }



}

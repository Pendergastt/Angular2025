import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Libro } from '../model/Libro';
import { Compra } from '../model/Compra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http:HttpClient) { }

  urlVerificar="http://localhost:3000/libreria/autenticar"
  urlConsulta="http://localhost:3000/libreria"
  usuarioVerificado:Usuario;

verificarUsuario(usuario:string,password:string):Observable<Usuario>{
  let user:Usuario= new Usuario(usuario,password)

  return this.http.post<Usuario>(`${this.urlVerificar}`,user);

}

consultarCatalogo(){
  return this.http.get<Libro[]>(`${this.urlConsulta}/catalogo`,{withCredentials:true});
}

consultarCompras(){
  return this.http.get<Compra[]>(`${this.urlConsulta}/compras`,{withCredentials:true})
}

}

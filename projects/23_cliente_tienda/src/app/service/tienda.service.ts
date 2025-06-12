import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { Observable } from 'rxjs';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  token:string;
  // Estas son las credenciales que me darán el token.
  // No es lo ideal, es para probar
  username:string="usuario1";
  password:string="usuario1";
  urlRecursos:string="http://localhost:3000/tienda"
  urlAutenticar:string="http://localhost:3000/autenticacion/login"

  constructor(
    private http:HttpClient
  )
  {
    //conectamos en el constructor al crear la página para obtener el token.
    //Hacemos un post en la URL del usuario y la contraseña y nos devuelve el token
    this.http.post<any>(this.urlAutenticar,{username:this.username,password:this.password})
    .subscribe(data=>this.token=data.valorToken);
    // El token lo hemos guardadro

  }

  // en los métdos vamos a crear los headers pero estaría bien tenerlo en un método al que llamar
  // Así pediría el token cada vez por si hubiera caducado o cambiado.

  productos():Observable<Producto[]>{
        console.log(this.token)

    let head=new HttpHeaders();
    head = head.set("Authorization",`Bearer ${this.token}`); //definimos la cabecera como tipo authorization y tipo de token
    return this.http.get<Producto[]>(`${this.urlRecursos}/productos`,{headers:head}) // mandamos la consulta con el token en la cabecera
  }

  altaPedido(pedido:Pedido):Observable<void>{
    let head=new HttpHeaders();
    head=head.set("Authorization",`Bearer ${this.token}`);
    return this.http.post<void>(`${this.urlRecursos}/altaPedido`,pedido,{headers:head})
  }



}

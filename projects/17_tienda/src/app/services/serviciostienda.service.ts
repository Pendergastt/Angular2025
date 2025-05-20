import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class ServiciostiendaService {

  constructor(private httpClient:HttpClient) { }

  urlApi="http://localhost:3000/"

altaProducto(producto:Producto):Observable<void>{
  let urlAlta=this.urlApi+"productos"
  return this.httpClient.post<void>(urlAlta,producto)

};

buscarProducto(categoria:number):Observable<Producto[]>{
let urlBuscar=this.urlApi+"productos"
return this.httpClient.get<Producto[]>(`${urlBuscar}?idCategoria=${categoria}`)
};

eliminarProducto(){
return this.httpClient.get<Producto>(this.urlApi+"productos")

};

categorias():Observable<Categoria[]>{ // Para hacer array que tenga un sleect de la categoria

  return this.httpClient.get<Categoria[]>(`${this.urlApi}categorias`);

}


}

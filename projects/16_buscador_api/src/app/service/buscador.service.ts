import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../modelo/item';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient) {

   }

   buscador="http://localhost:8000/buscador/";

   buscar(tematica:string):Observable<Item[]>{

    return this.http.get<Item[]>(this.buscador+"buscar",{params:{tematica:tematica}});
  // return this.http.get<Item[]>(`${this.buscador}/buscar?tematica=tematica}`);


   }


   nuevoItem(pagina:Item){
    let heads=new HttpHeaders();
    heads=heads.set("Content-Type","application/json");
    return this.http.post<Item>(this.buscador+"alta",pagina,{headers:heads});


   }

   eliminar(tematica:string){
    return this.http.delete<Item>(this.buscador + "eliminar", {params:{tematica:tematica}});



   }

}

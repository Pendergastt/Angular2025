import { HabitacionComponent } from './../../../../pruebas_fuera_curso/src/app/habitaciones/habitacion/habitacion.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAPIService {

constructor(private urlBGG:HttpClient){}

url:string="https://boardgamegeek.com/xmlapi/search?search="
direccionBuscar:string;

buscar(juego:string){
this.direccionBuscar=this.url+juego
console.log(this.direccionBuscar)
this.tomarDatos(this.direccionBuscar)

}

tomarDatos(juego:string){
console.log(this.urlBGG.get(juego).subscribe());


}




}

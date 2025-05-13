import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pais } from '../model/pais';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url:string="https://restcountries.com/v2/all"
  regiones:Set<string>=new Set();

  constructor(private http:HttpClient) { }

  obtenerPaises():Observable<Pais[]>{
    // le pido al http que tome esa dirección
    return this.http.get<Pais[]>(this.url); // esto nos devuelve un OBSERVER. el tipo de datos lo ponemos entre < >

// el observable es un ente que es como que te dice, te promete que te va a dar los datos que le estás pidiendo
// No los obtengo en el momento pero le digo qué es lo que quiero que haga. Pero lo que hago es "suscribirme"
// suscribirme a que llegarán los datos y cuando lleguen haces tal cosa.

  }

  // esto va a ser un método que devuelva una lista de continentes,
  continente():Observable<string[]>{

  // cogemos la url del tipo PAIS y le hacemos pipe para manipularlo
  // en el pipe hacemos un map para manipular el objeto y pedirle que por cada item de dentro nos pushee la region a una variable regiones

    this.http.get<Pais[]>(this.url).pipe(
      map((items: Pais[])=>{
        items.forEach(pais => {
          let regionesObservable:Observable<string>;
          regionesObservable+=pais.region.toString()
        })
        }
      )
    );

      return Array.from(this.regiones)

  };




}

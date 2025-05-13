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
    return this.http.get<Pais[]>(this.url); // esto nos devuelve un OBSERVABLE. el tipo de datos lo ponemos entre < >

// el observable es un ente que es como que te dice, te promete que te va a dar los datos que le estás pidiendo
// No los obtengo en el momento pero le digo qué es lo que quiero que haga. Pero lo que hago es "suscribirme"
// suscribirme a que llegarán los datos y cuando lleguen haces tal cosa.

  }

  // esto va a ser un método que devuelva una lista de continentes,
  continente():Observable<string[]>{

  // cogemos la url del tipo PAIS y le hacemos pipe para manipularlo
  // en el pipe hacemos un map para manipular el objeto y pedirle que por cada item de dentro nos pushee la region a una variable regiones

    return this.http.get<Pais[]>(this.url).pipe(
      map(paises=> [...new Set(paises.map((pais) => pais.region))]))

      // usamos los maps para modificar el array que vamos cogiendo de pais.
      // hemos accedido a la primera capa con el primer map
      // accedemos a la segunda capa con map para transformar los objetos solo en cada region
      // Vamos a hacer un SET para poner todas las regiones pero sin que se repitan
      // y luego convertimos ese SET en ARRAY con los tres puntos.

  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
    .pipe(map((paises)=>paises.filter(p=>p.region==continente)));

  }
}

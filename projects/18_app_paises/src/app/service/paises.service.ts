import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pais } from '../model/pais';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url:string="http://localhost:3000/paises/"
  regiones:Set<string>=new Set();

  constructor(private http:HttpClient) { }


  // esto va a ser un método que devuelva una lista de continentes,
  continente():Observable<string[]>{

  // cogemos la url del tipo PAIS y le hacemos pipe para manipularlo
  // en el pipe hacemos un map para manipular el objeto y pedirle que por cada item de dentro nos pushee la region a una variable regiones

    return this.http.get<string[]>(`${this.url}continentes`)

  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url}paises/${continente}`)

  }
}

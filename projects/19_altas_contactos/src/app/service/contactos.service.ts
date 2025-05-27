import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
url:string="http://localhst:3000/contactos"
  constructor(private http:HttpClient) { }


  alta(contacto:Contacto):Observable<any>{
    const response= this.http.post(`${this.url}/alta/`,contacto)//lo ponemos así porque el post necesita EL DONDE Y EL QUÉ. El donde es la url; el qué es el contacto
    return response

  }
}


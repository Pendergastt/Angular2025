import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  agenda:Contacto[]=[];

  guardar(contacto:Contacto):void{
    this.agenda.push(contacto);
  }
  eliminar(posicion:number):void{
    this.agenda.splice(posicion,1);
  }
  recuperar():Contacto[]{
    return this.agenda;
  }

}

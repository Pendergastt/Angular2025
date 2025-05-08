import { Injectable } from '@angular/core';
import { Contacto } from './modelo/contacto';
@Injectable({
  providedIn: 'root'
})
export class AgendaCompletaService {

  constructor() { }

    agendaCompleta:Contacto[]=[];
    resultado:Contacto[];

  guardar(cliente:Contacto){
    this.agendaCompleta.push(cliente);
    console.log(this.agendaCompleta);

  };


  buscar(correo:string){
    this.resultado=this.agendaCompleta.filter(contacto=>contacto.correo==correo);

    return this.resultado


  };

  repetido(correo:string):boolean{
    return this.agendaCompleta.some(contacto=>contacto.correo==correo);

  }

  mostrarTodos():Contacto[]{

    return this.agendaCompleta

  };

  eliminar(posicion:number){
    this.agendaCompleta.splice(posicion,1);


  }


}

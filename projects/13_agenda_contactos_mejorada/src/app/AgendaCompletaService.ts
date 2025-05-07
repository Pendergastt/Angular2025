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
    alert("nuevo contacto creado");
    console.log(this.agendaCompleta);

  };


  buscar(correo:string){
    this.resultado=this.agendaCompleta.filter(contacto=>contacto.correo==correo);

    return this.resultado




  };

  mostrarTodos(){



  };


}

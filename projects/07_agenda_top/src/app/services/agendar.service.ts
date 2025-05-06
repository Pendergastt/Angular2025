import { Injectable } from '@angular/core';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {

  agenda:Contacto[]=[];
  resultado:Contacto[]=[];
  visible:boolean=false;

  guardar(contacto:Contacto){
    this.agenda.push(contacto);
    console.log(this.agenda);
    return this.agenda;


}

  buscar(busqueda:string){

   this.resultado = this.agenda.filter(contactoAgenda=>contactoAgenda.nombre==busqueda||contactoAgenda.apellido==busqueda||contactoAgenda.telefono==busqueda||contactoAgenda.correo==busqueda);

   return this.resultado;


  }

}

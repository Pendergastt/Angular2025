import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/contacto';
import { AgendarService } from '../services/agendar.service';

@Component({
  selector: 'app-contactos',
  imports: [FormsModule,CommonModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {

  nombre:string;
  apellido:string;
  telefono:string;
  correo:string;
  buscarVisible:boolean=false;
  mostrarVisible:boolean=false;
  agenda;
  resultado:Contacto[]=[];

constructor(private agendarServices:AgendarService){}

crearContacto(){

let nuevoContacto=new Contacto(this.nombre,this.apellido,this.telefono,this.correo);
this.agenda=this.agendarServices.guardar(nuevoContacto)

}

buscarContacto(){

this.buscarVisible=true;
let busqueda=this.nombre||this.apellido||this.telefono||this.correo;
this.resultado=this.agendarServices.buscar(busqueda);

console.log(this.resultado);



}

mostrar(){
this.mostrarVisible=true;


}

}

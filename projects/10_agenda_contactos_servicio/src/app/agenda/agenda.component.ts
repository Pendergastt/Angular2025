import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  email:string;
  telefono:string;
  contactos:Contacto[];

  constructor(private agendaService: AgendaService){

  }

  guardar(){
    let contacto=new Contacto(this.nombre,this.email,this.telefono);
    this.agendaService.guardar(contacto);
  }
  eliminar(indice:number){
    this.agendaService.eliminar(indice);
  }
  mostrar(){
    this.contactos=this.agendaService.recuperar();
  }
}

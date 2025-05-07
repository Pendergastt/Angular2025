import { AgendaCompletaService } from '../../AgendaCompletaService';
import { Component } from '@angular/core';
import { Contacto } from '../../modelo/contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nombre:string;
  correo:string;
  telefono:string;

  constructor(private agendaService: AgendaCompletaService){

  }

  guardarContacto(){

    let nuevoContacto=new Contacto(this.nombre,this.correo,this.telefono);
    this.agendaService.guardar(nuevoContacto)

  }


}

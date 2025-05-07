import { FormsModule } from '@angular/forms';
import { AgendaCompletaService } from '../../AgendaCompletaService';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../modelo/contacto';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule,CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  correo:string;
  resultado:Contacto[];
  constructor(private agendaService: AgendaCompletaService){}

  buscar(){
    this.resultado=this.agendaService.buscar(this.correo)




  }

}

import { AgendaCompletaService } from './../../AgendaCompletaService';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { FormsModule, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Contacto } from '../../modelo/contacto';

@Component({
  selector: 'app-listacompleta',
  imports: [FormsModule,CommonModule],
  templateUrl: './listacompleta.component.html',
  styleUrl: './listacompleta.component.css'
})
export class ListacompletaComponent {

agendaMostrar:Contacto[];

constructor(private agendaCompletaService:AgendaCompletaService){

this.agendaMostrar=this.agendaCompletaService.mostrarTodos()
console.log("esto es agenda mostrar");
}


eliminar(i:number){

this.agendaCompletaService.eliminar(i)


}



}

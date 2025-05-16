import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule,CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  constructor(private buscadorService:BuscadorService){}

  tematica:string;
  respuesta:number;

  eliminarTematica(tematica:string){
    this.buscadorService.eliminar(tematica).subscribe();

  }


}

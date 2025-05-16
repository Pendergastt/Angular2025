import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../modelo/item';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  constructor(private buscadorService:BuscadorService){}

tematica:string;
resultado:Item[]=[];


buscar(tematica:string){
this.buscadorService.buscar(tematica).subscribe(datos=>this.resultado=datos)
this.buscadorService.buscar(tematica).subscribe(datos=>console.log(datos.length))
console.log(this.resultado)

};


}

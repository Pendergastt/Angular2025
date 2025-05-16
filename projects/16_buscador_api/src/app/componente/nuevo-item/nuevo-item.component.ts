import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Item } from '../../modelo/item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './nuevo-item.component.html',
  styleUrl: './nuevo-item.component.css'
})
export class NuevoItemComponent {

  constructor(private buscadorService:BuscadorService){}


  url:string;
  tematica:string;
  descripcion:string;
  nuevaPagina:Item;


  guardarPagina(){

    let item = new Item(this.url,this.tematica,this.descripcion);
    this.buscadorService.nuevoItem(item).subscribe(); //por qué tengo que poner subscribe?
  }

}

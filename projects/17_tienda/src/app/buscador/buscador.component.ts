import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../modelos/producto';
import { ServiciostiendaService } from '../services/serviciostienda.service';
import { Categoria } from '../modelos/categoria';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor (private serviciosTienda:ServiciostiendaService){
    this.serviciosTienda.categorias().subscribe(data=>this.categorias=data)
  }

  categorias:Categoria[];
  productos:Producto[]=[];
  idCategoria:number;

buscarCategoria():void{
  console.log(this.idCategoria);
  this.serviciosTienda.buscarProducto(this.idCategoria).subscribe(datos=>this.productos=datos)
  console.log(this.productos);

}


}

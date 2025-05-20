import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiciostiendaService } from '../services/serviciostienda.service';
import { FormsModule } from '@angular/forms';
import { Producto } from '../modelos/producto';
import { Categoria } from '../modelos/categoria';

@Component({
  selector: 'app-eliminacion',
  imports: [FormsModule,CommonModule],
  templateUrl: './eliminacion.component.html',
  styleUrl: './eliminacion.component.css'
})

export class EliminacionComponent {

constructor(private tiendaServicio:ServiciostiendaService){

this.tiendaServicio.categorias().subscribe(data=>this.categorias=data)

}

idCategoriaSeleccionada:number;
productos:Producto[]=[];
categorias:Categoria[];


buscarProductos(){
this.tiendaServicio.categorias

}

eliminarProducto(codigo:number){


}

}


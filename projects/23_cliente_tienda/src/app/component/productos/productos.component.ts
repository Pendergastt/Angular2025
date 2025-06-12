import { CommonModule } from '@angular/common';
import { TiendaService } from './../../service/tienda.service';
import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


constructor(
  private tiendaService:TiendaService
){

}

listaProductos:Producto[];

mostrarProductos(){
    this.tiendaService.productos().subscribe(data=>this.listaProductos=data)

}

}




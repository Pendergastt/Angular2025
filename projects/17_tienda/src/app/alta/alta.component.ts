import { ServiciostiendaService } from './../services/serviciostienda.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../modelos/producto';
import { Categoria } from '../modelos/categoria';

@Component({
  selector: 'app-alta',
  imports: [CommonModule,FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

constructor (private servicioTienda:ServiciostiendaService){
  this.servicioTienda.categorias().subscribe(data=>this.categorias=data)
}

//codigo:number;
//denominacion:string;
//precio:number;
//categoria:number; //poner que se pueda elegir
//nuevoProducto:Producto;


//Creamos un objeto producto que se rellena con los datos de producto.
producto:Producto=new Producto();
categorias:Categoria[]

// Como ya hemos creado un producto vacío pero con las características del modelo solo tenemos que rellenarlo.
// Para rellenarlo, en el HTML hacemos referencia en los input A LOS VALORES DE LA CARACTERISTICA.
// De manera que en vez de crear tooodas las variables lo que vamos a hacer es, desde el html con el ngmodel, asignarlas directamente al objeto creado.
// VER HTML PARA ENTENDER

altaProducto(){
  this.servicioTienda.altaProducto(this.producto).subscribe();
  console.log("producto añadido");
}


}

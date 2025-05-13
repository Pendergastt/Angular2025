import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pais } from '../model/pais';
import { PaisesService } from '../service/paises.service';

@Component({
  selector: 'app-paises',
  imports: [FormsModule,CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {

//creamos una variable para meter los datos de los paises cuando estén

  paises:Pais[];
  regiones:string[]; //continentes
  continenteSeleccionado:string;
  visible:boolean=false;

  constructor (private paisesService:PaisesService){

    paisesService.continente().subscribe(datos=>this.regiones=datos); //esto construye el array de continentes (regiones)

  }

  //Método de respuesta al click del boton paises
paisesFiltrados():void{
// En la suscripción al observable le decimoslo (entre paréntesis) que tiene que hacer con los datos de la respuesta.
// En este caso los datos los guarda en la variable paises.
  this.paisesService.paisesContinente(this.continenteSeleccionado).subscribe(datos=>this.paises=datos)

  //lo que hace esta funcion es llamar al servicio paises continente con el continente seleccionado que le demos y nos suscribimos.
  // Ese observable va a devolver un filtro de paises en funcion del continente que le ponemos y decimos que los datos
  // nos los ponga en paises y ESO ES LO QUE LUEGO MOSTRAREMOS



}

}

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
  regiones:Set<string>=new Set();
  visible:boolean=false;

  constructor (private paisesService:PaisesService){

  }

  //Método de respuesta al click del boton paises
verPaises():void{
// En la suscripción al observable le decimoslo (entre paréntesis) que tiene que hacer con los datos de la respuesta.
// En este caso los datos los guarda en la variable paises.
  this.paisesService.obtenerPaises().subscribe(datos=>this.paises=datos);
  this.paisesService.obtenerPaises().subscribe(datos=>this.regiones=datos.region)

}

}

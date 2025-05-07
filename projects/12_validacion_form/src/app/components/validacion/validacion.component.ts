import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule,CommonModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {

  usuario:string;
  password:string;
  constructor(private clientesService:ClientesService){

  }

  validar(){
    let respuesta=this.clientesService.validar(this.usuario, this.password)


  }


}

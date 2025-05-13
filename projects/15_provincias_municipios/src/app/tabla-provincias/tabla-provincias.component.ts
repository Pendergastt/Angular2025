import { CommonModule } from '@angular/common';
import { ProvinciasService } from './../services/provincias.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Provincias } from './../model/provincias';
import { Municipio } from '../model/municipio';

@Component({
  selector: 'app-tabla-provincias',
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-provincias.component.html',
  styleUrl: './tabla-provincias.component.css'
})
export class TablaProvinciasComponent {

  provincias:Provincias[];
  municipios:Municipio[];
  provinciaSeleccionada:number;
  todos:[]=[];//METER TODOS LOS MUNICIPIOS

  constructor(private provinciasService:ProvinciasService){
    this.inicio()
  }

  inicio(){ // esta llama a que me den el json donde están las provincias
  this.provinciasService.idProvincias().subscribe(datos=>this.provincias=datos)
  this.provinciasService.idProvincias().subscribe(datos=>console.log(datos))

  }
  municipio(municipio:number){ //esto llama a que me den el json donde están solo los municipios
  this.provinciasService.idMunicipios(municipio).subscribe(datos=>this.municipios=datos)
  this.provinciasService.idMunicipios(municipio).subscribe(datos=>console.log(datos))
  }
}

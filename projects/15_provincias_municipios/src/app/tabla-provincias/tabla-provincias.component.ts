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

  constructor(private provinciasService:ProvinciasService){

  }

  inicio(){
  this.provinciasService.idProvincias().subscribe(datos=>this.provincias=datos)
  this.provinciasService.idProvincias().subscribe(datos=>console.log(datos))

  }
  municipio(municipio:number){
  this.provinciasService.idMunicipios(municipio).subscribe(datos=>this.municipios=datos)
  this.provinciasService.idMunicipios(municipio).subscribe(datos=>console.log(datos))
  }
}

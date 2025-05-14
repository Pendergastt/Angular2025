import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultaAPIService } from '../services/consulta-api.service';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private consultaApi:ConsultaAPIService) { }

inicio(juegoBuscar:string){

  console.log(this.consultaApi.buscar(juegoBuscar))
};

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactosService } from '../../service/contactos.service';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  imports: [FormsModule,CommonModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string; // Para recoger el mensaje que voy a dar segun el error
  contacto:Contacto=new Contacto()
  constructor(private contactoService:ContactosService){

  }

  alta(){

  /* /////////////////////     MIRAR ESTO        ///////////////////////////
    this.contactoService.alta(this.contacto).suscribe(
    data=> if (data) this.mensaje="Contacto agregado",
    error=> if (error) this.mensaje="NO SE PUDO DAR DE ALTA EL CONTACTO"
    )

    */
    this.contactoService.alta(this.contacto).subscribe({
      // dentro del Json ponemos dos cosas: Lo que ocurre si todo va bien (next:)
      // lo que pasa si da un error (error:)
    next: data=> this.mensaje="Contacto agregado",
    error: err=> this.mensaje="NO SE PUDO DAR DE ALTA EL CONTACTO" //si hay codigo 400 o 500 se produce error

    })
  }


}

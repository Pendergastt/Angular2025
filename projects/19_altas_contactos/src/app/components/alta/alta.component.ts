import { Component } from '@angular/core';
import { ContactosService } from '../../service/contactos.service';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-alta',
  imports: [],
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
    this.contactoService.alta(this.contacto).suscribe({
    next: data=> this.mensaje="Contacto agregado",
    error: err=> this.mensaje="NO SE PUDO DAR DE ALTA EL CONTACTO"
    })
  }


}

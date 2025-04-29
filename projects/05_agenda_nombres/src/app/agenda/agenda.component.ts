import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Vamos a retocar el ejercicio para que no añada elementos repetidos
// SOLO QUE LO IMPIDA. NADA DE INFORMARTE. que no lo haga.
//


@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  agenda:string[]=[];
  visible:boolean=false;
  setAgenda=new Set()
  // mirar de hacerlo con "includes"
  // revisar bien el set
  // y mirar el commit and push

  guardar():void{
    console.log(this.nombre);
    console.log(this.setAgenda);
    this.setAgenda.add(this.nombre);


  }

  mostrar():void{
    this.visible=!this.visible;
    console.log(this.agenda);

  }


}

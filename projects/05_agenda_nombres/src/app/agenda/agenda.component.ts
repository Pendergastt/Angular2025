import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  visible:boolean=false;
  agenda=new Set();
  // mirar de hacerlo con "includes"
  // revisar bien el set
  // y mirar el commit and push

  guardar():void{
    console.log(this.nombre);
    this.agenda.add(this.nombre);
    console.log(this.agenda);

  }

  mostrar():void{
    this.visible=!this.visible;
    console.log(this.agenda);

  }


}

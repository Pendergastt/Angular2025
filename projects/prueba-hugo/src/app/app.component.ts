import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  num1:number;
  num2:number;
  resultado:number=0

  sumar():void{

    this.resultado=this.num1+this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`${this.resultado}`
  }

  multiplicar():void{
    this.resultado=this.num1*this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`${this.resultado}`
  }
}
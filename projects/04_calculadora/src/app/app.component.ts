import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero1:number=1;
  numero2:number=3;
  suma;
  multiplicacion;
  resultado:string;

  sumar():void{
    this.suma=this.numero1 + this.numero2;
    this.resultado=`El resultado de la suma es ${this.suma}`

  };

  multiplicar():void{
    this.multiplicacion=this.numero1*this.numero2;
    this.resultado=`El resultado de la multiplicación es ${this.multiplicacion}`
  };

}

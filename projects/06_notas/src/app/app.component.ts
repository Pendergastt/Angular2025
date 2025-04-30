import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

nota:number;
listaNotas:number[]=[];
visible:boolean=false;
media:number=0;
masAlta:number;
masBaja:number;
aprobados:number;

///////// METODOS /////////
// Sirven

guardar(){
  if(this.nota>=0 && this.nota<=10) this.listaNotas.push(this.nota);
  console.log(this.listaNotas);

  this.hacerMedia();
  this.notaMayor();
  this.notaMenor();
  this.cuantosAprobados();
  //this.nota.focus(); mirar lo del focus

};

mostrarDatos(){
  this.visible=!this.visible

};

hacerMedia(){
  /* Esto está hecho con FOR normal
  let a:number=0;
  for(let i of this.listaNotas){
    a+=i
  }
  this.media=a/(this.listaNotas.length);
  console.log("media es"+this.media);
  */

  // Lo hacemos con reduce (ponemos a,n como acumulador y N como cada cosa del array)
  this.media=this.listaNotas.reduce((a,n)=>a+n)/this.listaNotas.length;

}

notaMayor(){
  this.masAlta=Math.max(...this.listaNotas)

/*
  this.masAlta=this.listaNotas[0];
  this.listaNotas.forEach(nota =>{
    if (nota>this.masAlta) this.masAlta=nota;
  });
  return this.masAlta;
  */

}

notaMenor(){
  this.masBaja=Math.min(...this.listaNotas);

}

cuantosAprobados(){
  this.aprobados=this.listaNotas.filter((a)=>a>=5).length
  console.log(this.aprobados+" aprobados");

}


}

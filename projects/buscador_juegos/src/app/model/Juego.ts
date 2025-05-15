export class Juego{
  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:string;

constructor(nombre:string,tipo:string,jugadoresMin:string,jugadoresMax:string,dificultad:string){

  this.nombre=nombre;
  this.tipo=tipo;
  this.jugadoresMin=jugadoresMin;
  this.jugadoresMax=jugadoresMax;
  this.dificultad=dificultad;

}

}
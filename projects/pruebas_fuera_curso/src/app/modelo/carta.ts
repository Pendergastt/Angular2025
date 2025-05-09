export class Carta{

  nombre:string;
  movimiento:string[];
  disparo:string[];
  habilidad:number;
  trampa:boolean;

  constructor(nombre:string,movimiento:string[],disparo:string[],habilidad:number,trampa:boolean){

    this.nombre=nombre;
    this.movimiento=movimiento;
    this.disparo=disparo;
    this.habilidad=habilidad;
    this.trampa=trampa;
  };


}
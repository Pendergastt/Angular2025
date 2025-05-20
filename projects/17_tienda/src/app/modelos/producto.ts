import { provideZoneChangeDetection } from '@angular/core';
export class Producto{
  codigo:number;
  denominacion:string;
  precio:number;
  idCategoria:number;

  constructor(codigo?:number,denominacion?:string,precio?:number,idCategoria?:number){
    //hemos puesto un interrogante en el parametro para que SEA OPCIONAL a la hora de construirlo.
  this.codigo=codigo;
  this.denominacion=denominacion;
  this.precio=precio;
  this.idCategoria=idCategoria;

  }


}

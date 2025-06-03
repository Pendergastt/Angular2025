export class Curso{

  idCurso:number;
  nombre:string;
  duracion:number;
  fecha:Date;
  precio:number;

  constructor(idCurso:number,nombre:string,duracion:number,fecha:Date,precio:number){

    this.idCurso=idCurso;
    this.nombre=nombre;
    this.duracion=duracion;
    this.fecha=fecha;
    this.precio=precio;

  }

}

export class Cliente{

nombre:string;
usuario:string;
password:string;
email:string;

//creamos el constructor con los parámetros de arriba para que se puedan introducir los datos

constructor(nombre:string,usuario:string,password:string,email:string){

  this.nombre=nombre
  this.usuario=usuario
  this.password=password
  this.email=email

}

}

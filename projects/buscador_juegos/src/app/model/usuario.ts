export class Usuario{

  idUsuario:string;
  nombre:string;
  apellido:string;
  nombreUsuario:string;
  tipoUsuario:string;
  password:string;
  correo:string;
  direccion:string;
  telefono:number;

  constructor(
    idUsuario:string,
    nombre:string,
    apellido:string,
    nombreUsuario:string,
    password:string,
    tipoUsuario:string,
    correo:string,
    direccion:string,
    telefono:number,
  )
    {

      this.idUsuario=idUsuario;
      this.nombre=nombre;
      this.apellido=apellido;
      this.nombreUsuario=nombreUsuario;
      this.password=password;
      this.tipoUsuario=tipoUsuario;
      this.correo=correo;
      this.direccion=direccion;
      this.telefono=telefono;

    }



}
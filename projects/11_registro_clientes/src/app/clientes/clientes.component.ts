import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { RegistroService } from '../service/registro.service';

//metodos para recoger los datos y vincular los daros

@Component({
  selector: 'app-clientes',
  imports: [FormsModule,CommonModule,],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  //aquí le metemos la inyección con el constructor para llamar al CLIENTE SERVICE que tiene las funciones que usaremos para registrar

  nombre:string;
  usuario:string;
  password:string;
  email:string;
  visible:boolean=false; //es para hacer o no visible el div que contiene el formulario de registro

 // cuando llamamos al constructor lo que hacemos es darle nombre a una variable (normalmente el mismo nombre)
 // hemos dado antes los datos que necesitamos TOMAR DE LA PÁGINA y los relacionamos con
  constructor(private registroService: RegistroService){}

  // Definimos lo que vamos a leer en la página que son las variables de arriba.
  // Ahora, con este validar local lo que hacemos es llamar al método del servicio con los datos de esta página


  validar(){
    // lo que hacemos con esto es: creamos una constante que nos dirá si es verdadero o falso y llamamos
    // a la que le hacemos llamar a la funcion validar de los servicios del registro. y le damos como argumentos
    // this.usuario y this.password.

    const validacion:boolean=this.registroService.validacion(this.usuario,this.password);

    // De esta manera, coge los datos que hayamos metido, llamamos a la función en el servicio,
    // le damos esos datos y nos da verdadero o falso. Esto se mete en la constante validación y ahora
    // tenemos que decirle qué pasa si es verdadeo o si es falso.

    if (validacion){
      alert("USUARIO CORRECTO");
    }else alert("EL USUARIO NO COINCIDE");

  }



  registrar(){ //esto solo hace visible true o false
    this.visible=!this.visible

  }

  guardarCliente(){
    // Creamos el objeto cliente a partir de los datos que recogemos de la página.
    let cliente= new Cliente(this.nombre,this.usuario,this.password,this.email);
    // Llamamos a la función de guardar cliente (que es un push) en los servicios de registro
    // y le damos el argumento "cliente" recién creado para que lo meta.
    this.registroService.guardar(cliente);
    alert("Cliente registrado");
    this.registrar();

  };


}

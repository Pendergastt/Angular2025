import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

//arrays y métodos para operar. guardar, validar...

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  listaClientes:Cliente[]=[]; //mi lista clientes que es un cliente array cliente[] que se inicializa en vacío[]


  // para guardar le damos un dato "c" cuyo tipo va a ser Cliente, el tipo Cliente que hemos definido en ts

  guardar(c:Cliente):void{
  // esto significa que lo que hacemos al guardar cliente es recoger esa "c", que es un tipo CLIENTE
  // y ese c, en forma de objeto cliente, entra en la lista de clientes.
    this.listaClientes.push(c);
    console.log(this.listaClientes)


  };

  //vamos a valirad Y NECESITA DOS PARÁMETROS; UN USUARIO Y UNA CONTRASEÑA y nos devuelve si es
  validacion(usuario:string,password:string):boolean{
  return this.listaClientes.some(cliente=>cliente.usuario == usuario && cliente.password==password)
  // busca en la lisat de clientes. Va a coger cada objeto cliente. A cada objeto cliente, nos vamos a referir
  // como c, por ejemplo, y vamos a ver que cada valor usuario dentro del objeto cliente (c) sea igual que el usuario que hemos metido.

  // le ponemos un return porque lo que hemos buscado es un método que devuelve verdadero o falso

  }

}

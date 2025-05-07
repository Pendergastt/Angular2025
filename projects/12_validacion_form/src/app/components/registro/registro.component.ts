import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private clienteService:ClienteService,private router:Router){}

  usuario:string;
  password:string;
  email:string;
  telefono:string;

  registrar(){

    let cliente=new Cliente(this.usuario,this.password,this.email,this.telefono)
    this.clienteService.registrar(cliente);
    //añadir un router para que vuelva después a la primer página
  }

}

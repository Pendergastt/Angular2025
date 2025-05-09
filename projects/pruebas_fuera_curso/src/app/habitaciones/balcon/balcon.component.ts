import { AgendaService } from './../../../../../10_agenda_contactos_servicio/src/app/service/agenda.service';
import { Component } from '@angular/core';
import { Carta } from '../../modelo/carta';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccionesService } from '../../service/acciones.service';

@Component({
  selector: 'app-balcon',
  imports: [FormsModule,CommonModule],
  templateUrl: './balcon.component.html',
  styleUrl: './balcon.component.css'
})
export class BalconComponent {
  nombre:string="balcon"
  movimiento:string[]=["recibidor","vestibulo"];
  disparo:string[]=["balcon","recibidor","vestibulo","cocina","comedor"];
  habilidad:number=0; //la habilidad es moverse a la cocina
  trampa:boolean=false;

  cartaBalcon:Carta;
  cartaRandom:Carta;
  casaCompleta:Carta[]=[];

  constructor(private agendaService:AccionesService){
    this.cartaBalcon=new Carta(this.nombre,this.movimiento,this.disparo,this.habilidad,this.trampa);
    this.cartaRandom=new Carta("random",["uno","dos"],["atumadre","atuabuela"],2,false);
    this.agendaService.casaCompleta.push(this.cartaBalcon);
    this.agendaService.casaCompleta.push(this.cartaRandom);
    this.casaCompleta=[...this.agendaService.casaCompleta];

  }



}

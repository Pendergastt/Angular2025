import { AccionesService } from './../service/acciones.service';
import { Component } from '@angular/core';
import { Carta } from '../modelo/carta';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [FormsModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  casa:Carta[]=[];

  constructor(private accionesService:AccionesService){}


  }


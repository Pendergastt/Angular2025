import { Injectable } from '@angular/core';
import { Carta } from '../modelo/carta';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {


  numeroTrampas:number;
  habitacionActual:Carta;
  habitaciones:Carta[];
  numeroAcciones:number;
  casaCompleta:Carta[]=[];

  constructor() {

   }


// mira en el array de hacia donde puede moverse y selecciona la carta que se elija
// reduce 1 las acciones.

  mover(habitacion:string){


  };

  // mira en el array donde puede disparar y dispara hacia esa carta (mirar si se puede hacer que se sepa donde está)
  // en cualquier caso reduce uno las acciones
  disparar(habitacion:string){


  };

// Le pide al contrario que elija una habitación del array  hacia donde puede moverse
// reduce 1 las acciones
  escuchar(){


  };
// Gasta una acción. pone una trampa, la carta tiene que avisarte de que hay bomba para que puedas detonarla
// solo dos trampas
  ponerTrampa(habitacion:string){


  };

//gasta accion para detonar la trampa
  detonarTrampa(habitacion:string){



  };

//El coste depende de la accion, ejecuta lo que haga
  accionEspecial(habitacion:string){



  };

//muestra el mapa
  mapa(){


  };

// reestablece el número de puntos de accion
// si está en cocina, añade 1pa
  terminarTurno(){



  };

}

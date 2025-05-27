import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movimiento } from '../../model/movimiento';
import { FormsModule } from '@angular/forms';
import { MovimientoService } from '../../service/movimiento.service';

@Component({
  selector: 'app-movimientos',
  imports: [CommonModule, FormsModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {
  constructor(private movimientoService:MovimientoService){}

    idCuenta:number;
    fechaInicio:Date;
    fechaFinal:Date;
    resultado:Movimiento[]=[];


buscarPorFecha(fechaInicio:Date,fechaFinal:Date){
  this.movimientoService.buscarPorFecha(fechaInicio,fechaFinal).subscribe(data=>this.resultado=data)

}


}

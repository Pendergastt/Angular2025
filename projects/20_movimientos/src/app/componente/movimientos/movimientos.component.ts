import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovimientoService } from '../../service/movimiento.service';
import { Movimiento } from '../../model/movimiento';
import { FechaPersonalPipe } from '../../pipes/fecha-personal.pipe';

@Component({
  selector: 'app-movimientos',
  imports: [CommonModule, FormsModule, FechaPersonalPipe],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {
  constructor(private movimientoService:MovimientoService){}

    idCuenta:number;
    fechaInicio:Date;
    fechaFinal:Date;
    resultado:Movimiento[]=[];
    resultadoFechas:Movimiento[]=[];


buscarPorFecha(fechaInicio:Date,fechaFinal:Date){
  this.movimientoService.buscarPorFecha(fechaInicio,fechaFinal).subscribe(data=>this.resultadoFechas=data)

}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../model/movimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/movimientos"

  movimiento:Movimiento;

buscarPorCuenta(cuenta:number){
  this.http.get(`${this.url}/cuenta/${cuenta}`).subscribe()

}

buscarPorFecha(fechaInicio:Date,fechaFinal:Date):Observable<Movimiento[]>{
  return this.http.get<Movimiento[]>(`${this.url}/fecha?fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}`);
}

}

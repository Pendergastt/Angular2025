import { Alumno } from './../model/Alumno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatricularService {

  constructor(private http:HttpClient) {
    this.cursos();
   }

    url="http://localhost:3000/formacion"

cursos():Observable<Curso[]>{
  return this.http.get<Curso[]>(`${this.url}/cursos`)
}

alumnos(curso:number):Observable<Alumno[]>{
  return this.http.get<Alumno[]>(`${this.url}/alumnos/${curso}`)
}

matricular(matricula:Matricula){
  this.http.post<Matricula>(`${this.url}/matricular`,matricula);
  return true
}


}

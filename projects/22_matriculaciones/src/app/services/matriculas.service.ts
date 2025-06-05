import { urlBase } from './../utilities/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  constructor(private http:HttpClient
  ) {
    this.listaCursos()
  }

  cursos:Curso[]=[]

   listaCursos():Observable<Curso[]>{
    const url:string = `${urlBase}/matriculaciones/cursos`
    return this.http.get<Curso[]>(url); //lo que hemos hecho ha sido crear una constante en un archivo para poder llamarla cada vez
    // La llamamos URLBASE y justo aqui arriba definimos la url como la base con los parametros y lo cambiamos

  }

  listaMatriculas(idCurso:number):Observable<Matricula[]>{
    return this.http.get<Matricula[]>(`${urlBase}/matriculaciones/matriculas/${idCurso}`)
  }

}

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatricularService } from '../../services/matricular.service';
import { Curso } from '../../model/Curso';
import { Alumno } from '../../model/Alumno';
import { Matricula } from '../../model/Matricula';

@Component({
  selector: 'app-matricular',
  imports: [CommonModule,FormsModule],
  templateUrl: './matricular.component.html',
  styleUrl: './matricular.component.css'
})
export class MatricularComponent {

constructor(private matricularService:MatricularService){
  this.matricularService.cursos().subscribe(data=>this.listaCursos=data)
}

  listaCursos:Curso[]=[];
  alumnosParaMatricular:Alumno[]=[];
  curso:number;
  alumnoSeleccionado:string;
  cursoSeleccionado:number;

mostrarAlumnosMatricular(){
  console.log(this.curso)
  this.matricularService.alumnos(this.curso).subscribe(data=>this.alumnosParaMatricular=data)
  console.log(this.alumnosParaMatricular)

}

matricular(){

  const nuevaMatricula:Matricula=new Matricula(this.alumnoSeleccionado,this.curso);
  this.matricularService.matricular(nuevaMatricula)

  console.log(nuevaMatricula)

}

}


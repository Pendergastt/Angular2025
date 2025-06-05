import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatriculasService } from '../../services/matriculas.service';
import { Curso } from '../../model/Curso';
import { Matricula } from '../../model/Matricula';
@Component({
  selector: 'app-matriculas',
  imports: [FormsModule,CommonModule],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
  constructor(private matriculasService:MatriculasService){
    this.matriculasService.listaCursos().subscribe(data=>this.listaCursos=data)
  }


listaCursos:Curso[]=[]
cursoSeleccionado:number;
listaMatriculas:Matricula[]=[];

mostrarMatriculas(idCurso:number){
  console.log(this.cursoSeleccionado)
  this.matriculasService.listaMatriculas(idCurso).subscribe(data=>this.listaMatriculas=data)
}


}

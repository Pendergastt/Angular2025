import { Component, Inject } from '@angular/core';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-cuadro-dialogo',
  imports: [MatDialogModule],
  templateUrl: './cuadro-dialogo.component.html',
  styleUrl: './cuadro-dialogo.component.css'
})
export class CuadroDialogoComponent {

constructor(private dialogRef:MatDialogRef<CuadroDialogoComponent>,
@Inject(MAT_DIALOG_DATA) public data: {usuario:string, password:string}
){}
cerrar() {
this.dialogRef.close();
}
}


}

export class Movimiento{

    idCuenta:number;
    fecha:Date;
    cantidad:number;
    operacion:string;

    constructor(idCuenta?:number,fecha?:Date,cantidad?:number,operacion?:string){

        this.idCuenta=idCuenta;
        this.fecha=fecha;
        this.cantidad=cantidad;
        this.operacion=operacion;

    }

}

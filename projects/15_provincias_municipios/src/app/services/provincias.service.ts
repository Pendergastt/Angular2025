import { Provincias } from './../model/provincias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Municipio } from '../model/municipio';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  urlProvincias:string="https://www.el-tiempo.net/api/json/v2/provincias"

  constructor(private httpClient: HttpClient) { }


idProvincias():Observable<Provincias[]>{

return this.httpClient.get<any>(this.urlProvincias)
.pipe(map(jsonprovincias=>jsonprovincias.provincias))

}

idMunicipios(cod:number):Observable<Municipio[]>{
  // Para lo que es el municipio tenemos que construir la dirección.
  // Como la dirección es urlProvincias pero añadimos el codigo de provincia lo hacemos de la siguiente manera
// Le damos el argumento cod a la funcion y lo añadimos con ${} a una constante llamada url
  const url:string=`${this.urlProvincias}/${cod}/municipios`


return this.httpClient.get<any>(url)
.pipe(map(jsonmunicipios=>jsonmunicipios.municipios))
}







}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: 'root'
})
export class MapaService {


  constructor(private http: HttpClient) { }

// ==================================================
//
// ==================================================
  damePosicion(){

    let url = URL_SERVICIOS + '/jornada/trazabilidad';

    return this.http.get( url );
  }


}

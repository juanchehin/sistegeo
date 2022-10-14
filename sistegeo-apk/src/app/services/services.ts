import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const URL_SERVICIOS = environment.URL_SERVICIOS;


@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(
    private http: HttpClient
  ) {

  }

// ==================================================
//  Envia latitud y longitud al backend
// ==================================================
enviarData( dataLtLg: any ) {

  let url = URL_SERVICIOS + '/dataGeolocalizacion' ;

  return this.http.get(
    url,
    dataLtLg
  );
}

}

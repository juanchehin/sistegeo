import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL_SERVICIOS = environment.URL_SERVICIOS;


@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(
    private http: HttpClient
  ) {

  }

// ==================================================
//  Envia latitud y longitud al backend - Trazabilidad
// ==================================================
trazabilidad( dataLtLg: any ) {

  console.log("data es service : " + dataLtLg);

  let url = URL_SERVICIOS + '/jornada/trazabilidad';

  console.log("url es service : " + url);

  this.http.post( url,
    {
      latitud: dataLtLg.coords.latitude,
      longitud: dataLtLg.coords.longitude
    }
    ).subscribe();

}
// ==================================================
//  Inicia la jornada
// ==================================================
inicioJornada( IdVehiculo: number,IdUsuario: number ) {

  let url = URL_SERVICIOS + '/jornada/inicio';

  console.log("url es finJornada service : " + url);

  this.http.post( url,
    {
      IdVehiculo: IdVehiculo,
      IdUsuario: IdUsuario
    }
    ).subscribe();

}

// ==================================================
//  Finaliza jornada
// ==================================================
finJornada(  ) {

  let url = URL_SERVICIOS + '/jornada/fin';

  console.log("url es finJornada service : " + url);

  this.http.get( url );

}


// ==============================
listarVehiculos(  ) {

  console.log('entra en listarVehiculos');

    let url = URL_SERVICIOS + '/vehiculos/listar';
    // url += '?IdRol=' + this.IdRol;  // params
    return this.http.get( url );

}

}
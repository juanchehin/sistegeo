import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: 'root'
})
export class ChoferesService {


  constructor(private http: HttpClient) { }

// ==================================================
//        Cargar planes - Peticion GET al server
// ==================================================

listarChoferesPaginado( desde: number , incluyeBajas: number ) {

  const url = URL_SERVICIOS + '/usuarios/choferes/listar/' + desde + '/' + incluyeBajas;
  return this.http.get( url );

}


// ==================================================
//        Da de baja una plan
// ==================================================

darBajaChofer( IdUsuario: string ) {

  let url = URL_SERVICIOS + '/choferes/baja/' + IdUsuario;
  // url += '?IdRol=' + this.personaService.IdRol;

  return this.http.put(
    url,
    IdUsuario,
    // {
    //   headers: {
    //     token: this.personaService.token
    //   }
    // }
);

}

// ==================================================
//
// ==================================================

altaChofer( chofer: any ) {

  const url = URL_SERVICIOS + '/usuarios/choferes/alta/';
  return this.http.post( url,chofer );

}

}

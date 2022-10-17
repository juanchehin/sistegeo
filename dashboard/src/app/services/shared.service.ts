import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: 'root'
})
export class sharedService {


  constructor(private http: HttpClient) { }

  // ==================================================
//
// ==================================================
  damePosicion(){

    let url = URL_SERVICIOS + '/dataGeolocalizacion/getData';

    console.log("pasa damePosicion url : " + url);

    return this.http.get( url );
  }



}

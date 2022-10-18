import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Services } from '../../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: [],
})
export class HomePage implements OnInit {
  public folder: string;
  public estadoJornada = false;
  public now: Date = new Date();
  vehiculos!: any;

  constructor(
    private geolocation: Geolocation,
    private services: Services) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {
    this.listarVehiculos();
  }

  // ==============================
  // Inicia/Finaliza la jornada de seguimiento
  // ==============================
  jornada()
  {
    this.estadoJornada = !this.estadoJornada;
    console.log("EstadoJornada es : ",this.estadoJornada);
    let watch = this.geolocation.watchPosition();

    if(this.estadoJornada == true){
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log("resp es : ",resp);
          // resp.coords.latitude
          // resp.coords.longitude
         }).catch((error) => {
           console.log('Error getting location', error);
         });

         watch.subscribe((data) => {
          console.log("data es : ",data);

          this.services.enviarData(data);
          // data can be a set of coordinates, or an error (if an error occurred).
          // data.coords.latitude
          // data.coords.longitude
         });
    }
    else
    {
      this.estadoJornada = !this.estadoJornada;
      // Desuscribirme de watch
        //  watch.unsubscribe();
    }
  }

  // ==============================
  // ==============================
  listarVehiculos()
  {
    this.services.listarVehiculos(  )
    .subscribe( (resp: any) => {

       this.vehiculos = resp.vehiculos[0];

      //  this.cargando = false;

     });


  }


}

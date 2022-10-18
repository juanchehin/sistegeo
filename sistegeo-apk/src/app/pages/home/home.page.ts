import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Services } from '../../services/services';
import { Subscription } from 'rxjs';

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
  watch: Subscription;

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

    if(this.estadoJornada)
    {
      this.watch = this.geolocation.watchPosition().subscribe(pos => {
        console.log("pos es : ",pos);

        this.services.enviarData(pos);
      });
    }
    else
    {
      this.watch.unsubscribe();
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

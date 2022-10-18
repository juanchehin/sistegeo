import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Services } from '../../services/services.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

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
  IdVehiculo: number;
  vehiculoSeleccionado = 0;

  constructor(
    private geolocation: Geolocation,
    private services: Services,
    private alertCtrl: AlertController
    ) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {
    this.listarVehiculos();
    // this.IdVehiculo = this.services.IdVehiculo;
    // this.IdUsuario = this.services.IdUsuario;
  }

  // ==============================
  // Inicia/Finaliza la jornada de seguimiento
  // ==============================
  jornada()
  {
    if(this.vehiculoSeleccionado == 0)
    {
      this.showAlert('Debe seleccionar un vehiculo');
      return;
    }
    this.estadoJornada = !this.estadoJornada;

    if(this.estadoJornada)
    {
      this.services.inicioJornada(1,1);

      this.watch = this.geolocation.watchPosition().subscribe(pos => {
        this.services.trazabilidad(pos);
      });

    }
    else
    {
      this.watch.unsubscribe();
      this.services.finJornada();
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

// ==================================================
// Detecta los cambios en el select de los planes
// ==================================================
cambios(nuevoValor: any) {

    this.vehiculoSeleccionado = nuevoValor;

    // this.cargarClientes();
}

  // ==============================
  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Mensaje',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
}

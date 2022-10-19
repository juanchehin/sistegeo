import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private sharedService: sharedService) { }

  ngOnInit() {
    this.actualizarPosicion();
  }

  zoom: number = 15;
  lat: number = -27.4356104;
  lng: number = -65.6103222;
  lastInfoWindow: any;
  banderaPrimeraVez = false;
  contador = 1;

  // Vehic
  vehiculos: any[] = [
    // {
    //   IdVehiculo: 1,
    //   lat: '',
    //   lng: '',
    //   label: { color: 'white', text: 'P1' },
    //   draggable: true
    // }
  ]

  markerClicked(marker: any, index: number, infoWindowRef: any) {
    if (this.lastInfoWindow) {
      this.lastInfoWindow.close();
    }
    this.lastInfoWindow = infoWindowRef;
    console.log(marker, index);
  }

  mapClicked($event: any) {
    this.vehiculos.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }

// ===================================
//    Actualiza la posicion cada 3 segundos
// =================================

actualizarPosicion(){

  interval(3000).subscribe(x =>

    this.sharedService.damePosicion()
               .subscribe( (resp: any) => {

                console.log("resp es : ", resp);

                if(this.banderaPrimeraVez == false) {
                  this.vehiculos.push({
                    IdVehiculo: resp.IdVehiculo,
                    latitud: resp.latitud,
                    longitud: resp.longitud,
                    draggable: true
                  });

                  this.banderaPrimeraVez = true;
                }
                else
                {
                  console.log("pasa else")
                  // actualizar datos
                  this.vehiculos.forEach(item =>{
                    console.log("pasa forEach : ",item)
                    console.log("resp.IdVehiculo forEach : ",resp.IdVehiculo)

                    if(item.IdVehiculo == resp.IdVehiculo){
                        // item.name = newitem.name
                        item.latitud = resp.latitud,
                        item.longitud = resp.longitud
                    }
                });
                }

        })
  )

}

}

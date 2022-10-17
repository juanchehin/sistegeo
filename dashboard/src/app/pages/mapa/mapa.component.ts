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
  lat: number = 28.626137;
  lng: number = 79.821603;
  lastInfoWindow: any;

  markers: any[] = [
    {
      lat: 28.625485,
      lng: 79.821091,
      label: { color: 'white', text: 'P1' },
      draggable: true
    },
    {
      lat: 28.625293,
      lng: 79.817926,
      label: { color: 'white', text: 'P2' },
      draggable: false
    },
    {
      lat: 28.625182,
      lng: 79.814640,
      label: { color: 'white', text: 'P3' },
      draggable: true
    }
  ]

  markerClicked(marker: any, index: number, infoWindowRef: any) {
    if (this.lastInfoWindow) {
      this.lastInfoWindow.close();
    }
    this.lastInfoWindow = infoWindowRef;
    console.log(marker, index);
  }

  mapClicked($event: any) {
    this.markers.push({
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

              })

  )

}

}

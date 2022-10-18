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
  banderaPrimeraVez = false;
  contador = 1;

  markers: any[] = [
    {
      id: 1,
      lat: '',
      lng: '',
      label: { color: 'white', text: 'P1' },
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

                if(this.banderaPrimeraVez == false) {
                  this.markers.push({
                    lat: resp.latitude,
                    lng: resp.longitude,
                    draggable: true
                  });


                  this.lat = resp.latitude + this.contador;
                  this.lng = resp.longitude + this.contador;

                  this.banderaPrimeraVez = true;
                }
                else
                {
                  console.log("pasa else")
                  // actualizar datos
                  // this.markers.getUpdate(item.id)
                  // .subscribe(updatedItem => {
                  //   item = updatedItem;
                  // });

                  this.markers.forEach(item =>{
                    if(item.id == 1){
                        item.lat = resp.latitude + this.contador;
                        item.lng = resp.longitude + this.contador;

                        this.lat = resp.latitude + this.contador;
                        this.lng = resp.longitude + this.contador;


  console.log("this.lat : ",this.lat)
  console.log("this.lng : ",this.lng)

  console.log("this.contador : ",this.contador)
  // this.contador = this.contador + 0.1;

                    }
                });
                }


              })

  )

}

}

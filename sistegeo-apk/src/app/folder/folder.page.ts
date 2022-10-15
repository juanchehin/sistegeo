import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Services } from '../services/services';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public estadoJornada = false;
  public now: Date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private services: Services
    ) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  jornada()
  {
    this.estadoJornada = !this.estadoJornada;
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

}

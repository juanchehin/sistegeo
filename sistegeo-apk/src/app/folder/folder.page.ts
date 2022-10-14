import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private estadoJornada = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation
    ) { }

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
          // data can be a set of coordinates, or an error (if an error occurred).
          // data.coords.latitude
          // data.coords.longitude
         });
    }
    else
    {
      // Desuscribirme de watch
        //  watch.unsubscribe();
    }
  }

}

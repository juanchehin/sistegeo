import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { sharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
declare var swal: any;

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: []
})
export class ChoferesComponent implements OnInit {
  forma!: FormGroup;
  cargando = true;
  choferes: any;
  desde = 0;
  incluyeBajas = 0;
  totalChoferes = 0;


  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: sharedService
    ) { }


  ngOnInit() {
    this.listarChoferes();
  }


// ==================================================
//        Modifica la bandera de incluye bajas profesionales
// ==================================================
modificaBandera(  ) {

  if (this.incluyeBajas === 0) {
    this.incluyeBajas = 1;
  } else {
    this.incluyeBajas = 0;
  }
  this.listarChoferes();
}

// ==================================================
//        Carga los choferes activos
// ==================================================

listarChoferes() {

  this.sharedService.listarChoferesPaginado( this.desde , this.incluyeBajas )
             .subscribe( (resp: any) => {

              this.totalChoferes = resp[1][0].cantChoferes;

              if (resp[1][0].cantChoferes === null) {
                this.totalChoferes = 0;
              }

              this.choferes = resp[0];
              this.cargando = false;

            });

}

// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

  const desde = this.desde + valor;

  if ( desde >= this.totalChoferes ) {
    return;
  }

  if ( desde < 0 ) {
    return;
  }

  this.desde += valor;
  this.listarChoferes();

}


// ==================================================
// Da de baja un plan
// ==================================================

bajaChofer( chofer: any ) {

Swal.fire({
  title: '¿Esta seguro?',
  text: 'Esta a punto de dar de baja a "' + chofer.Apellido + ' ' + chofer.Nombres + '"',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, borrar!'
})
.then( borrar => {

  if (borrar) {

    const parametro = chofer.IdUsuario.toString();

    this.sharedService.darBajaChofer( parametro )
              .subscribe( (resp: any) => {
                  this.listarChoferes();
                  if ( resp === 'Ok') {
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Chofer dado de baja',
                      showConfirmButton: false,
                      timer: 2000
                    });
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Hubo un problema al eliminar',
                      text: resp.Mensaje,
                    });
                  }

              });
  }

});

}


}


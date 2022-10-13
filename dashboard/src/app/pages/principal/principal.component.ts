import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: []
})
export class PrincipalComponent implements OnInit {
  forma!: FormGroup;
  cargando = true;
  persona: any;
  movimientosCliente: any[] = [];
  private date!: any;
  valor = 0;
  totalMovimientosCliente = 0;
  desde = 0;



  constructor(
    private activatedRoute: ActivatedRoute
    ) { }


  ngOnInit() {
    this.cargarMovimientosCliente();
    this.cargarPersona();

  }


  nuevaCaja() {

    if ( this.forma.invalid ) {
      return;
    }




    }

// ==================================================
//        Carga de persona
// ==================================================

cargarPersona() {

  this.cargando = true;

  this.date = this.activatedRoute.snapshot.paramMap.get('id');



}

// ==================================================
//   Carga los movimientos de un cierto cliente, dado su id
// ==================================================

cargarMovimientosCliente() {

  this.cargando = true;

  this.date = this.activatedRoute.snapshot.paramMap.get('id');


}
// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

  const desde = this.desde + valor;

  if ( desde >= this.totalMovimientosCliente ) {
    return;
  }

  if ( desde < 0 ) {
    return;
  }

  this.desde += valor;
  this.cargarMovimientosCliente();

}
}


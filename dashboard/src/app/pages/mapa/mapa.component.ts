import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: []
})
export class MapaComponent implements OnInit {
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
  }

// ==================================================
//        Carga de persona
// ==================================================

cargarPersona() {

}

// ==================================================
//   Carga los movimientos de un cierto cliente, dado su id
// ==================================================

cargarMovimientosCliente() {



}
// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {


}
}


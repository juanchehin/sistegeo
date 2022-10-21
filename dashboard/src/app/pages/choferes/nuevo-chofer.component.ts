import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChoferesService } from 'src/app/services/choferes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-chofer',
  templateUrl: './nuevo-chofer.component.html',
  styles: []
})
export class NuevoChoferComponent implements OnInit {

  forma!: FormGroup;
  cargando = true;



  constructor(private router: Router,public choferesService: ChoferesService, public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe( (params: any) => {

      const id = params.id;

      if ( id !== 'nuevo' ) {
      }

    });

  }

  ngOnInit() {
    this.forma = new FormGroup({
        IdUsuario: new FormControl('0'),
        Apellidos: new FormControl(null, Validators.required),
        Nombres: new FormControl(null, Validators.required),
        Usuario: new FormControl(null, Validators.required ),
        Contraseña: new FormControl('A'),
        Telefono: new FormControl(null ),
        Observaciones: new FormControl(null )
      });
  }

// ==================================================
//        Crear Chofer
// ==================================================

altaChofer() {

      if ( this.forma.invalid ) {
        return;
      }

      const chofer = new (
        this.forma.value.Apellidos,
        this.forma.value.Nombres,
        this.forma.value.Usuario,
        this.forma.value.Contraseña,
        this.forma.value.Telefono,
        this.forma.value.Observaciones
      );

      this.choferesService.altaChofer( chofer )
                .subscribe( (resp: any) => {
                  console.log("resp en plan es : ",resp)
                  if ( resp.Mensaje === 'Ok') {
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Plan cargado',
                      showConfirmButton: false,
                      timer: 2000
                    });
                    this.router.navigate(['/choferes']);
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Hubo un problema al cargar',
                      text: 'Contactese con el administrador',
                    });
                  }
                  return;
                });


              }
}

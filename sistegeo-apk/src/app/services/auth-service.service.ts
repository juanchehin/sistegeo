import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Preferences  } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  IdUsuario: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}


// ==================================================
//        Permite saber si un usuario esta logueado
// ==================================================
estaLogueado() {

  // this.token = localStorage.getItem('token');
  Preferences.get({ key: 'token' }).then((result) => {
    this.token = result.value;
  });

  if ((this.token === "sistegeo-logueo")) {
    return true;
  } else {
    return false;

  }
}

// ==================================================
//    Logueo del usuario por formulario
// ==================================================
  login(user: string, password: string) {

    var persona =
    {
      user: user,
      password: password
    }

    const url = URL_SERVICIOS + '/login';

    return this.http.post(url, persona)
        .subscribe((response: any) =>
          {

            if(response.mensaje != 'Error de credenciales')
            {
              Preferences.set({
                  key: 'token',
                  value: 'sistegeo-logueo', //response.token
                });

              Preferences.set({
                  key: 'IdUsuario',
                  value: response.IdUsuario
                });

              this.IdUsuario = response.IdUsuario;
              // console.log("This.idusuario es : ",this.IdUsuario)
              // Preferences.set({
              //     key: 'IdVehiculo',
              //     value: response.IdVehiculo,
              //   });

              return true;
            }

            // mostrar modal
            this.showAlert('Error de logueo');
            // loadingEl.dismiss();
            return false;
          }
    )


  }

// ==================================================
//    Logout
// ==================================================
  logout() {

    Preferences.remove({ key: 'token' });
    Preferences.remove({ key: 'IdUsuario' });
    Preferences.remove({ key: 'IdVehiculo' });

    this.token = null;
    this.router.navigate(['/login']);

  }

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

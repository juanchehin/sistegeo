import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Preferences  } from '@capacitor/preferences';
import { Router } from '@angular/router';
// import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;

  constructor(
    private router: Router,
    // private settingsService: SettingsService
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

    // Enviar datos al backend

    // Respuesta del backend

    var respuesta = true;

    if(respuesta)
    {
      Preferences.set({
          key: 'token',
          value: 'sistegeo-logueo',
        });

      return true;
    }
    return false;
  }

// ==================================================
//    Logout
// ==================================================
  logout() {
    // localStorage.removeItem('token');
    Preferences.remove({ key: 'token' });
    this.token = null;
    this.router.navigate(['/login']);
    // this.settingsService.limpiarIP();
  }

}

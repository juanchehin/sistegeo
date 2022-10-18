import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService, public router: Router
  ) { }

  canActivate() {

    if ( this.authService.estaLogueado()) {
      return true;
     } else {
       this.router.navigate(['/login']);
       return false;
    }
  }

}

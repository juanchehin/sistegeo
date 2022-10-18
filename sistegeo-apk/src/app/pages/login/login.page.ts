import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [],
})
export class LoginPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  // ==============================
  authenticate(user: string, password: string) {
    this.isLoading = true;

    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();

        if (this.authService.login(user, password)) {

              this.isLoading = false;
              loadingEl.dismiss();
              this.router.navigateByUrl("home");

        } else {
          this.showAlert('Error de logueo');
          loadingEl.dismiss();
        }
      });


  }
  // ==============================

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  // ==============================

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Mensaje',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
  // ==============================

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const user = form.value.user;
    const password = form.value.password;

    this.authenticate(user, password);
    form.reset();
  }

}

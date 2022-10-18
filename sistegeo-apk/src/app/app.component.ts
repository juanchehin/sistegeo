import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/home', icon: 'home' },
    { title: 'Acerca de', url: '/acercade', icon: 'information-circle' },
    // { title: 'Log Out', url: '/logout', icon: 'log-out' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public labels = [];

  constructor(
    public authService: AuthService,
    private router:Router
    ) {

  }

  ngOnInit() {
    this.router.navigate(['login']);
  }

  onLogout() {
    this.authService.logout();
  }

}

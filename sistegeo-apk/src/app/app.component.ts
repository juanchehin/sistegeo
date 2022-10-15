import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/home', icon: 'home' },
    { title: 'Acerca de', url: '/acercade', icon: 'information-circle' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public labels = [];

  constructor() {

  }

}

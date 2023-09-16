import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lugares', url: '/lugares', icon: 'location' },
    { title: 'Contactos', url: '/contactos', icon: 'person-circle' },
  ];
  constructor() {}
}

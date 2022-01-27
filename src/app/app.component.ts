import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tutorials', url: '/folder/Tutorials', icon: 'mail' },
    { title: 'Database', url: '/folder/Database', icon: 'paper-plane' },
    { title: 'Piano', url: '/folder/Piano', icon: 'heart' },
    { title: 'Scoring', url: '/folder/Scoring', icon: 'archive' },
  ];
  public labels = ['Tutorials', 'Database', 'Piano', 'Scoring'];
  constructor() {}
}

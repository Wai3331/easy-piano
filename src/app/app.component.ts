import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'home', icon: 'pie-chart' },
    { title: 'Musical Tutorials', url: 'mtutorialoptions', icon: 'school' },
    { title: 'Piano Tutorials', url: 'ptutorialoptions', icon: 'school' },
    { title: 'Library', url: 'library', icon: 'library' },
    { title: 'Favourite', url: 'favourite', icon: 'heart' },
    { title: 'Piano', url: 'piano', icon: 'musical-notes' },
    { title: 'Scoring', url: 'scoring', icon: 'chatbubbles' },
  ];
  constructor() {}
}

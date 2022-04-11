import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Media,MediaObject } from '@awesome-cordova-plugins/media/ngx';
import {File,FileEntry} from '@awesome-cordova-plugins/file/ngx';
import {HTTP,HTTPResponse} from '@awesome-cordova-plugins/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ScreenOrientation,Media,File,HTTP
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

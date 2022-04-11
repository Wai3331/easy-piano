import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { PtutorialVideoPageRoutingModule } from './ptutorial-video-routing.module';

import { PtutorialVideoPage } from './ptutorial-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtutorialVideoPageRoutingModule,
    SearchbarModule
  ],
  declarations: [PtutorialVideoPage]
})
export class PtutorialVideoPageModule {}

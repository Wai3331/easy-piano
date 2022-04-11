import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MTutorialVideoPageRoutingModule } from './m-tutorial-video-routing.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { MTutorialVideoPage } from './m-tutorial-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarModule,  
    MTutorialVideoPageRoutingModule
  ],
  declarations: [MTutorialVideoPage]
})
export class MTutorialVideoPageModule {}

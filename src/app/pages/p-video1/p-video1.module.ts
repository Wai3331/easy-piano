import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVideo1PageRoutingModule } from './p-video1-routing.module';

import { PVideo1Page } from './p-video1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVideo1PageRoutingModule
  ],
  declarations: [PVideo1Page]
})
export class PVideo1PageModule {}

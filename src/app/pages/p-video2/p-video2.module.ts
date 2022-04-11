import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVideo2PageRoutingModule } from './p-video2-routing.module';

import { PVideo2Page } from './p-video2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVideo2PageRoutingModule
  ],
  declarations: [PVideo2Page]
})
export class PVideo2PageModule {}

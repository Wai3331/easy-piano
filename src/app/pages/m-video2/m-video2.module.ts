import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MVideo2PageRoutingModule } from './m-video2-routing.module';

import { MVideo2Page } from './m-video2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MVideo2PageRoutingModule
  ],
  declarations: [MVideo2Page]
})
export class MVideo2PageModule {}

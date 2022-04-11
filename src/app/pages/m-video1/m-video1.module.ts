import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MVideo1PageRoutingModule } from './m-video1-routing.module';

import { MVideo1Page } from './m-video1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MVideo1PageRoutingModule
  ],
  declarations: [MVideo1Page]
})
export class MVideo1PageModule {}

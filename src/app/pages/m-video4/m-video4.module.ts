import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MVideo4PageRoutingModule } from './m-video4-routing.module';

import { MVideo4Page } from './m-video4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MVideo4PageRoutingModule
  ],
  declarations: [MVideo4Page]
})
export class MVideo4PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVideo4PageRoutingModule } from './p-video4-routing.module';

import { PVideo4Page } from './p-video4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVideo4PageRoutingModule
  ],
  declarations: [PVideo4Page]
})
export class PVideo4PageModule {}

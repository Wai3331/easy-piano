import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Piano2PageRoutingModule } from './piano2-routing.module';

import { Piano2Page } from './piano2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Piano2PageRoutingModule
  ],
  declarations: [Piano2Page]
})
export class Piano2PageModule {}

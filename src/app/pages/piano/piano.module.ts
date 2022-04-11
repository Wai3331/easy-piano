import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PianoPageRoutingModule } from './piano-routing.module';

import { PianoPage } from './piano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PianoPageRoutingModule
  ],
  declarations: [PianoPage],
})
export class PianoPageModule {}

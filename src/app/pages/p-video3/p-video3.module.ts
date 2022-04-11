import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVideo3PageRoutingModule } from './p-video3-routing.module';

import { PVideo3Page } from './p-video3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVideo3PageRoutingModule
  ],
  declarations: [PVideo3Page]
})
export class PVideo3PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MVideo3PageRoutingModule } from './m-video3-routing.module';

import { MVideo3Page } from './m-video3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MVideo3PageRoutingModule
  ],
  declarations: [MVideo3Page]
})
export class MVideo3PageModule {}

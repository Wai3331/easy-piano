import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet10PageRoutingModule } from './sheet10-routing.module';

import { Sheet10Page } from './sheet10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet10PageRoutingModule
  ],
  declarations: [Sheet10Page]
})
export class Sheet10PageModule {}

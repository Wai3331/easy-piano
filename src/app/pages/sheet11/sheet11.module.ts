import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet11PageRoutingModule } from './sheet11-routing.module';

import { Sheet11Page } from './sheet11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet11PageRoutingModule
  ],
  declarations: [Sheet11Page]
})
export class Sheet11PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet9PageRoutingModule } from './sheet9-routing.module';

import { Sheet9Page } from './sheet9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet9PageRoutingModule
  ],
  declarations: [Sheet9Page]
})
export class Sheet9PageModule {}

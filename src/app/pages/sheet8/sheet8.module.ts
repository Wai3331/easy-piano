import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet8PageRoutingModule } from './sheet8-routing.module';

import { Sheet8Page } from './sheet8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet8PageRoutingModule
  ],
  declarations: [Sheet8Page]
})
export class Sheet8PageModule {}

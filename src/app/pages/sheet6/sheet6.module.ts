import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet6PageRoutingModule } from './sheet6-routing.module';

import { Sheet6Page } from './sheet6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet6PageRoutingModule
  ],
  declarations: [Sheet6Page]
})
export class Sheet6PageModule {}

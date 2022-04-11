import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet12PageRoutingModule } from './sheet12-routing.module';

import { Sheet12Page } from './sheet12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet12PageRoutingModule
  ],
  declarations: [Sheet12Page]
})
export class Sheet12PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet7PageRoutingModule } from './sheet7-routing.module';

import { Sheet7Page } from './sheet7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet7PageRoutingModule
  ],
  declarations: [Sheet7Page]
})
export class Sheet7PageModule {}

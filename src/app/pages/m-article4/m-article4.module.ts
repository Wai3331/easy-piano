import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle4PageRoutingModule } from './m-article4-routing.module';

import { MArticle4Page } from './m-article4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle4PageRoutingModule
  ],
  declarations: [MArticle4Page]
})
export class MArticle4PageModule {}

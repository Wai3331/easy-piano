import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle4PageRoutingModule } from './p-article4-routing.module';

import { PArticle4Page } from './p-article4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle4PageRoutingModule
  ],
  declarations: [PArticle4Page]
})
export class PArticle4PageModule {}

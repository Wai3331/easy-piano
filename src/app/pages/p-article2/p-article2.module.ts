import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle2PageRoutingModule } from './p-article2-routing.module';

import { PArticle2Page } from './p-article2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle2PageRoutingModule
  ],
  declarations: [PArticle2Page]
})
export class PArticle2PageModule {}

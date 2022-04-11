import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle1PageRoutingModule } from './p-article1-routing.module';

import { PArticle1Page } from './p-article1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle1PageRoutingModule
  ],
  declarations: [PArticle1Page]
})
export class PArticle1PageModule {}

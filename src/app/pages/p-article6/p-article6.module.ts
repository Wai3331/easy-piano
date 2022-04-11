import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle6PageRoutingModule } from './p-article6-routing.module';

import { PArticle6Page } from './p-article6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle6PageRoutingModule
  ],
  declarations: [PArticle6Page]
})
export class PArticle6PageModule {}

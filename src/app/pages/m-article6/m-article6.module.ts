import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle6PageRoutingModule } from './m-article6-routing.module';

import { MArticle6Page } from './m-article6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle6PageRoutingModule
  ],
  declarations: [MArticle6Page]
})
export class MArticle6PageModule {}

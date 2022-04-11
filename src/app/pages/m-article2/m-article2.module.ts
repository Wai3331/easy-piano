import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle2PageRoutingModule } from './m-article2-routing.module';

import { MArticle2Page } from './m-article2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle2PageRoutingModule
  ],
  declarations: [MArticle2Page]
})
export class MArticle2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle1PageRoutingModule } from './m-article1-routing.module';

import { MArticle1Page } from './m-article1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle1PageRoutingModule
  ],
  declarations: [MArticle1Page]
})
export class MArticle1PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle5PageRoutingModule } from './p-article5-routing.module';

import { PArticle5Page } from './p-article5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle5PageRoutingModule
  ],
  declarations: [PArticle5Page]
})
export class PArticle5PageModule {}

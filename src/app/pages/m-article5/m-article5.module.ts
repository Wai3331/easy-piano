import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle5PageRoutingModule } from './m-article5-routing.module';

import { MArticle5Page } from './m-article5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle5PageRoutingModule
  ],
  declarations: [MArticle5Page]
})
export class MArticle5PageModule {}

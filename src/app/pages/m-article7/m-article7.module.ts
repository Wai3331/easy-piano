import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle7PageRoutingModule } from './m-article7-routing.module';

import { MArticle7Page } from './m-article7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle7PageRoutingModule
  ],
  declarations: [MArticle7Page]
})
export class MArticle7PageModule {}

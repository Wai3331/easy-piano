import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle7PageRoutingModule } from './p-article7-routing.module';

import { PArticle7Page } from './p-article7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle7PageRoutingModule
  ],
  declarations: [PArticle7Page]
})
export class PArticle7PageModule {}

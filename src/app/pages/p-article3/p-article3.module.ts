import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PArticle3PageRoutingModule } from './p-article3-routing.module';

import { PArticle3Page } from './p-article3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PArticle3PageRoutingModule
  ],
  declarations: [PArticle3Page]
})
export class PArticle3PageModule {}

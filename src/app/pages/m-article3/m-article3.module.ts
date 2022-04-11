import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MArticle3PageRoutingModule } from './m-article3-routing.module';

import { MArticle3Page } from './m-article3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MArticle3PageRoutingModule
  ],
  declarations: [MArticle3Page]
})
export class MArticle3PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoringPageRoutingModule } from './scoring-routing.module';

import { ScoringPage } from './scoring.page';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoringPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ScoringPage]
})
export class ScoringPageModule {}

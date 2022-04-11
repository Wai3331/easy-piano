import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtutorialoptionsPageRoutingModule } from './ptutorialoptions-routing.module';

import { PtutorialoptionsPage } from './ptutorialoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtutorialoptionsPageRoutingModule
  ],
  declarations: [PtutorialoptionsPage]
})
export class PtutorialoptionsPageModule {}

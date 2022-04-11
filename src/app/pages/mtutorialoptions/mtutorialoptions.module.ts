import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtutorialoptionsPageRoutingModule } from './mtutorialoptions-routing.module';

import { MtutorialoptionsPage } from './mtutorialoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtutorialoptionsPageRoutingModule
  ],
  declarations: [MtutorialoptionsPage]
})
export class MtutorialoptionsPageModule {}

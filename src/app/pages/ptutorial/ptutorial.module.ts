import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtutorialPageRoutingModule } from './ptutorial-routing.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';

import { PtutorialPage } from './ptutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtutorialPageRoutingModule,
    SearchbarModule, 
  ],
  declarations: [PtutorialPage]
})
export class PtutorialPageModule {}

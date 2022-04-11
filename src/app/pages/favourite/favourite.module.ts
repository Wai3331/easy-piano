import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritePageRoutingModule } from './favourite-routing.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FavouritePage } from './favourite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritePageRoutingModule,
    SearchbarModule
  ],
  declarations: [FavouritePage]
})
export class FavouritePageModule {}

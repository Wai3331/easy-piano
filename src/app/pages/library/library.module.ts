import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { LibraryPage } from './library.page';

import { CategoryItemModule } from 'src/app/components/searchbar/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
  ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryClassicalPageRoutingModule } from './library-classical-routing.module';
import { CategoryItemModule } from 'src/app/components/searchbar/category-item/category-item.module';
import { LibraryClassicalPage } from './library-classical.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryClassicalPageRoutingModule,
    SearchbarModule, 
    CategoryItemModule,
  ],
  declarations: [LibraryClassicalPage]
})
export class LibraryClassicalPageModule {}

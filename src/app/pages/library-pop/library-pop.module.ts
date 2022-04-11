import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPopPageRoutingModule } from './library-pop-routing.module';

import { LibraryPopPage } from './library-pop.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/searchbar/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPopPageRoutingModule,
    SearchbarModule, 
    CategoryItemModule,
  ],
  declarations: [LibraryPopPage]
})
export class LibraryPopPageModule {}

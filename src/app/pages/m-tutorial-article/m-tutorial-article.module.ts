import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MTutorialArticlePageRoutingModule } from './m-tutorial-article-routing.module';

import { MTutorialArticlePage } from './m-tutorial-article.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/searchbar/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MTutorialArticlePageRoutingModule,
    SearchbarModule,  
    CategoryItemModule,
  ],
  declarations: [MTutorialArticlePage]
})
export class MTutorialArticlePageModule {}

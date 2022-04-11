import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MTutorialArticlePage } from './m-tutorial-article.page';

const routes: Routes = [
  {
    path: '',
    component: MTutorialArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MTutorialArticlePageRoutingModule {}

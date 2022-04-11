import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle5Page } from './p-article5.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle5PageRoutingModule {}

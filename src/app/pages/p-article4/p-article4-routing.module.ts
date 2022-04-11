import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle4Page } from './p-article4.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle4PageRoutingModule {}

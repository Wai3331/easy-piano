import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle1Page } from './p-article1.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle1PageRoutingModule {}

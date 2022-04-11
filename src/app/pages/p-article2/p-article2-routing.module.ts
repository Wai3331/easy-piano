import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle2Page } from './p-article2.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle2PageRoutingModule {}

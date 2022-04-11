import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle2Page } from './m-article2.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle2PageRoutingModule {}

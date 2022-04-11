import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle1Page } from './m-article1.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle1PageRoutingModule {}

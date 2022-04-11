import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle5Page } from './m-article5.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle5PageRoutingModule {}

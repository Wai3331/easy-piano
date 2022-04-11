import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle7Page } from './m-article7.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle7PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle6Page } from './p-article6.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle6PageRoutingModule {}

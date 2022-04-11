import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle6Page } from './m-article6.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle6PageRoutingModule {}

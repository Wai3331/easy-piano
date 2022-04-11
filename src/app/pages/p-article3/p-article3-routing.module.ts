import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PArticle3Page } from './p-article3.page';

const routes: Routes = [
  {
    path: '',
    component: PArticle3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PArticle3PageRoutingModule {}

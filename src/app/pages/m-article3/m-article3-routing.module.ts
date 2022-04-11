import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MArticle3Page } from './m-article3.page';

const routes: Routes = [
  {
    path: '',
    component: MArticle3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MArticle3PageRoutingModule {}

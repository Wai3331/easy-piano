import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet9Page } from './sheet9.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet9PageRoutingModule {}

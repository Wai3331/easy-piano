import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet10Page } from './sheet10.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet10PageRoutingModule {}

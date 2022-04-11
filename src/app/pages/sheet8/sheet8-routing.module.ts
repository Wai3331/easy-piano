import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet8Page } from './sheet8.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet8PageRoutingModule {}

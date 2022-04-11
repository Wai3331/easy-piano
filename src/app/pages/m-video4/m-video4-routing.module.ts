import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MVideo4Page } from './m-video4.page';

const routes: Routes = [
  {
    path: '',
    component: MVideo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MVideo4PageRoutingModule {}

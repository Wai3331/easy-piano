import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVideo4Page } from './p-video4.page';

const routes: Routes = [
  {
    path: '',
    component: PVideo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVideo4PageRoutingModule {}

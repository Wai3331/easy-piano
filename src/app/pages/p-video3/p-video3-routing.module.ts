import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVideo3Page } from './p-video3.page';

const routes: Routes = [
  {
    path: '',
    component: PVideo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVideo3PageRoutingModule {}

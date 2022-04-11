import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MVideo3Page } from './m-video3.page';

const routes: Routes = [
  {
    path: '',
    component: MVideo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MVideo3PageRoutingModule {}

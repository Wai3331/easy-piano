import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MVideo2Page } from './m-video2.page';

const routes: Routes = [
  {
    path: '',
    component: MVideo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MVideo2PageRoutingModule {}

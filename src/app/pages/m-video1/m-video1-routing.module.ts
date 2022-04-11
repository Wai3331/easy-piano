import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MVideo1Page } from './m-video1.page';

const routes: Routes = [
  {
    path: '',
    component: MVideo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MVideo1PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MTutorialVideoPage } from './m-tutorial-video.page';

const routes: Routes = [
  {
    path: '',
    component: MTutorialVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MTutorialVideoPageRoutingModule {}

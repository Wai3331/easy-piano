import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVideo2Page } from './p-video2.page';

const routes: Routes = [
  {
    path: '',
    component: PVideo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVideo2PageRoutingModule {}

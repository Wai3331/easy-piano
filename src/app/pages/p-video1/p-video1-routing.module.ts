import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVideo1Page } from './p-video1.page';

const routes: Routes = [
  {
    path: '',
    component: PVideo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVideo1PageRoutingModule {}

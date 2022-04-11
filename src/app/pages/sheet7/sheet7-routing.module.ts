import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet7Page } from './sheet7.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet7PageRoutingModule {}

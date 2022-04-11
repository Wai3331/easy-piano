import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet12Page } from './sheet12.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet12PageRoutingModule {}

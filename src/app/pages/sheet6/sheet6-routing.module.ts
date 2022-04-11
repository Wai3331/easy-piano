import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet6Page } from './sheet6.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet6PageRoutingModule {}

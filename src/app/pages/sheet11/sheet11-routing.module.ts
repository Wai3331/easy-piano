import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet11Page } from './sheet11.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet11PageRoutingModule {}

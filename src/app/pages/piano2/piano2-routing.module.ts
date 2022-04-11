import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Piano2Page } from './piano2.page';

const routes: Routes = [
  {
    path: '',
    component: Piano2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Piano2PageRoutingModule {}

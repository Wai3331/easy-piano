import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtutorialPage } from './ptutorial.page';

const routes: Routes = [
  {
    path: '',
    component: PtutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtutorialPageRoutingModule {}

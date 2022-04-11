import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtutorialoptionsPage } from './ptutorialoptions.page';

const routes: Routes = [
  {
    path: '',
    component: PtutorialoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtutorialoptionsPageRoutingModule {}

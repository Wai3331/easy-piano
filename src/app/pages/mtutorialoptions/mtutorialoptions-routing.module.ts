import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtutorialoptionsPage } from './mtutorialoptions.page';

const routes: Routes = [
  {
    path: '',
    component: MtutorialoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtutorialoptionsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryPopPage } from './library-pop.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryPopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryPopPageRoutingModule {}

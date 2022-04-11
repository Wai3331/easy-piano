import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryClassicalPage } from './library-classical.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryClassicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryClassicalPageRoutingModule {}

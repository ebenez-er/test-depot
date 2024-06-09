import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptablePage } from './comptable.page';

const routes: Routes = [
  {
    path: '',
    component: ComptablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptablePageRoutingModule {}

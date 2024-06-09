import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirecteurPage } from './directeur.page';

const routes: Routes = [
  {
    path: '',
    component: DirecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirecteurPageRoutingModule {}

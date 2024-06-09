import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirecteurDesEtudesPage } from './directeur-des-etudes.page';

const routes: Routes = [
  {
    path: '',
    component: DirecteurDesEtudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirecteurDesEtudesPageRoutingModule {}

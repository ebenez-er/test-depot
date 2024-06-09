import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSallesPage } from './liste-salles.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSallesPageRoutingModule {}

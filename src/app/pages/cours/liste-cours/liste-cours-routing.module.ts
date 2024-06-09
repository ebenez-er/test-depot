import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCoursPage } from './liste-cours.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCoursPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeEtudiantPage } from './liste-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeEtudiantPageRoutingModule {}

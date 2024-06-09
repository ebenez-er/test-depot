import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtudiantPage } from './etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: EtudiantPage
  },  {
    path: 'liste-etudiant',
    loadChildren: () => import('./liste-etudiant/liste-etudiant.module').then( m => m.ListeEtudiantPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantPageRoutingModule {}

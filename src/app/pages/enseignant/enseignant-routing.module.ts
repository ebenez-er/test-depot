import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnseignantPage } from './enseignant.page';

const routes: Routes = [
  {
    path: '',
    component: EnseignantPage
  },  {
    path: 'liste-etudiant',
    loadChildren: () => import('./liste-etudiant/liste-etudiant.module').then( m => m.ListeEtudiantPageModule)
  },
  {
    path: 'liste-enseignant',
    loadChildren: () => import('./liste-enseignant/liste-enseignant.module').then( m => m.ListeEnseignantPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then( m => m.ListeCoursPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnseignantPageRoutingModule {}

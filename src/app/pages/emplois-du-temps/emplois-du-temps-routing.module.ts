import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploisDuTempsPage } from './emplois-du-temps.page';

const routes: Routes = [
  {
    path: '',
    component: EmploisDuTempsPage
  },  {
    path: 'listes',
    loadChildren: () => import('./listes/listes.module').then( m => m.ListesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploisDuTempsPageRoutingModule {}

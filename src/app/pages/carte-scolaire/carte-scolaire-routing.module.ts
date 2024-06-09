import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteScolairePage } from './carte-scolaire.page';

const routes: Routes = [
  {
    path: '',
    component: CarteScolairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteScolairePageRoutingModule {}

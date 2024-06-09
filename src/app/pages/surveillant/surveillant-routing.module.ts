import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveillantPage } from './surveillant.page';

const routes: Routes = [
  {
    path: '',
    component: SurveillantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveillantPageRoutingModule {}

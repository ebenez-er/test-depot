import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveillantPageRoutingModule } from './surveillant-routing.module';

import { SurveillantPage } from './surveillant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveillantPageRoutingModule
  ],
  declarations: [SurveillantPage]
})
export class SurveillantPageModule {}

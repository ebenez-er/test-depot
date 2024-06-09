import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploisDuTempsPageRoutingModule } from './emplois-du-temps-routing.module';

import { EmploisDuTempsPage } from './emplois-du-temps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploisDuTempsPageRoutingModule
  ],
  declarations: [EmploisDuTempsPage]
})
export class EmploisDuTempsPageModule {}

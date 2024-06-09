import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecteurPageRoutingModule } from './directeur-routing.module';

import { DirecteurPage } from './directeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecteurPageRoutingModule
  ],
  declarations: [DirecteurPage]
})
export class DirecteurPageModule {}

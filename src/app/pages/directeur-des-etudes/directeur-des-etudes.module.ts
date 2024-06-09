import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecteurDesEtudesPageRoutingModule } from './directeur-des-etudes-routing.module';

import { DirecteurDesEtudesPage } from './directeur-des-etudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecteurDesEtudesPageRoutingModule
  ],
  declarations: [DirecteurDesEtudesPage]
})
export class DirecteurDesEtudesPageModule {}

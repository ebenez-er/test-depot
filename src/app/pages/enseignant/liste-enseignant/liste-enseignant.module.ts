import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeEnseignantPageRoutingModule } from './liste-enseignant-routing.module';

import { ListeEnseignantPage } from './liste-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeEnseignantPageRoutingModule
  ],
  declarations: [ListeEnseignantPage]
})
export class ListeEnseignantPageModule {}

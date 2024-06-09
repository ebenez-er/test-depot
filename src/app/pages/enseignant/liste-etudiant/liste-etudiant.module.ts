import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeEtudiantPageRoutingModule } from './liste-etudiant-routing.module';

import { ListeEtudiantPage } from './liste-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeEtudiantPageRoutingModule
  ],
  declarations: [ListeEtudiantPage]
})
export class ListeEtudiantPageModule {}

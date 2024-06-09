import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSallesPageRoutingModule } from './liste-salles-routing.module';

import { ListeSallesPage } from './liste-salles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSallesPageRoutingModule
  ],
  declarations: [ListeSallesPage]
})
export class ListeSallesPageModule {}

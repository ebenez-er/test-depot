import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteScolairePageRoutingModule } from './carte-scolaire-routing.module';

import { CarteScolairePage } from './carte-scolaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteScolairePageRoutingModule
  ],
  declarations: [CarteScolairePage]
})
export class CarteScolairePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptablePageRoutingModule } from './comptable-routing.module';

import { ComptablePage } from './comptable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptablePageRoutingModule
  ],
  declarations: [ComptablePage]
})
export class ComptablePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretaryPageRoutingModule } from './secretary-routing.module';

import { SecretaryPage } from './secretary.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretaryPageRoutingModule,
    SharedModule
  ],
  declarations: [SecretaryPage]
})
export class SecretaryPageModule {}

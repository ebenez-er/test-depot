import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationsPageRoutingModule } from './communications-routing.module';

import { CommunicationsPage } from './communications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicationsPageRoutingModule
  ],
  declarations: [CommunicationsPage]
})
export class CommunicationsPageModule {}

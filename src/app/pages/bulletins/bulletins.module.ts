import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulletinsPageRoutingModule } from './bulletins-routing.module';

import { BulletinsPage } from './bulletins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulletinsPageRoutingModule
  ],
  declarations: [BulletinsPage]
})
export class BulletinsPageModule {}

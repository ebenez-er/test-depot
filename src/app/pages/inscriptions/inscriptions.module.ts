import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionsPageRoutingModule } from './inscriptions-routing.module';

import { InscriptionsPage } from './inscriptions.page';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [InscriptionsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InscriptionsPageRoutingModule,
        SharedModule
    ]
})
export class InscriptionsPageModule {}

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { EmptyScreenComponent } from './components/empty-screen/empty-screen.component';
import { ChatComponent } from './components/chat/chat.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent,CustomInputComponent,InscriptionComponent,EmptyScreenComponent,ChatComponent, LogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[HeaderComponent,CustomInputComponent,InscriptionComponent,ReactiveFormsModule, EmptyScreenComponent, ChatComponent,LogoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

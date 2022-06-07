import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLoginErrorPageRoutingModule } from './modal-login-error-routing.module';

import { ModalLoginErrorPage } from './modal-login-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLoginErrorPageRoutingModule
  ],
  declarations: [ModalLoginErrorPage]
})
export class ModalLoginErrorPageModule {}

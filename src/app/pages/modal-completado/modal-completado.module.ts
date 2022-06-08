import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCompletadoPageRoutingModule } from './modal-completado-routing.module';

import { ModalCompletadoPage } from './modal-completado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCompletadoPageRoutingModule
  ],
  declarations: [ModalCompletadoPage]
})
export class ModalCompletadoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEntradaPageRoutingModule } from './modal-entrada-routing.module';

import { ModalEntradaPage } from './modal-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEntradaPageRoutingModule
  ],
  declarations: [ModalEntradaPage]
})
export class ModalEntradaPageModule {}

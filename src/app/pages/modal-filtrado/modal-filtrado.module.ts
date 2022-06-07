import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFiltradoPageRoutingModule } from './modal-filtrado-routing.module';

import { ModalFiltradoPage } from './modal-filtrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFiltradoPageRoutingModule
  ],
  declarations: [ModalFiltradoPage]
})
export class ModalFiltradoPageModule {}

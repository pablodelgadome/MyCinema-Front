import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDatosPageRoutingModule } from './modal-datos-routing.module';

import { ModalDatosPage } from './modal-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDatosPageRoutingModule
  ],
  declarations: [ModalDatosPage]
})
export class ModalDatosPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSalaPageRoutingModule } from './modal-sala-routing.module';

import { ModalSalaPage } from './modal-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSalaPageRoutingModule
  ],
  declarations: [ModalSalaPage]
})
export class ModalSalaPageModule {}

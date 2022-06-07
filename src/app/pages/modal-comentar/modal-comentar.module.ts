import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalComentarPageRoutingModule } from './modal-comentar-routing.module';

import { ModalComentarPage } from './modal-comentar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComentarPageRoutingModule
  ],
  declarations: [ModalComentarPage]
})
export class ModalComentarPageModule {}

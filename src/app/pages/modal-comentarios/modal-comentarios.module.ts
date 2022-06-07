import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalComentariosPageRoutingModule } from './modal-comentarios-routing.module';

import { ModalComentariosPage } from './modal-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComentariosPageRoutingModule
  ],
  declarations: [ModalComentariosPage]
})
export class ModalComentariosPageModule {}

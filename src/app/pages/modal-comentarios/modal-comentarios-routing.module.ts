import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComentariosPage } from './modal-comentarios.page';

const routes: Routes = [
  {
    path: '',
    component: ModalComentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalComentariosPageRoutingModule {}

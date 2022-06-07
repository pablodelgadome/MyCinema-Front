import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComentarPage } from './modal-comentar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalComentarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalComentarPageRoutingModule {}

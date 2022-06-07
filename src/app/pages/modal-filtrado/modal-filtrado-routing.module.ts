import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFiltradoPage } from './modal-filtrado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFiltradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFiltradoPageRoutingModule {}

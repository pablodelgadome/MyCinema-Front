import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDatosPage } from './modal-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDatosPageRoutingModule {}

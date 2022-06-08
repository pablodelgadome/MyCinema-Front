import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCompletadoPage } from './modal-completado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCompletadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCompletadoPageRoutingModule {}

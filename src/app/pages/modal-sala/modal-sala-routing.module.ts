import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSalaPage } from './modal-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSalaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLoginErrorPage } from './modal-login-error.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLoginErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLoginErrorPageRoutingModule {}

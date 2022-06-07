import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  /*{
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },*/
  {
    path: 'modal-sala',
    loadChildren: () => import('./pages/modal-sala/modal-sala.module').then( m => m.ModalSalaPageModule)
  },
  {
    path: 'modal-comentarios',
    loadChildren: () => import('./pages/modal-comentarios/modal-comentarios.module').then( m => m.ModalComentariosPageModule)
  },
  {
    path: 'modal-entrada',
    loadChildren: () => import('./pages/modal-entrada/modal-entrada.module').then( m => m.ModalEntradaPageModule)
  },
  {
    path: 'modal-datos',
    loadChildren: () => import('./pages/modal-datos/modal-datos.module').then( m => m.ModalDatosPageModule)
  },
  {
    path: 'modal-filtrado',
    loadChildren: () => import('./pages/modal-filtrado/modal-filtrado.module').then( m => m.ModalFiltradoPageModule)
  },
  {
    path: 'modal-comentar',
    loadChildren: () => import('./pages/modal-comentar/modal-comentar.module').then( m => m.ModalComentarPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modal-login-error',
    loadChildren: () => import('./pages/modal-login-error/modal-login-error.module').then( m => m.ModalLoginErrorPageModule)
  },
  {
    path: 'modal-error',
    loadChildren: () => import('./pages/modal-error/modal-error.module').then( m => m.ModalErrorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

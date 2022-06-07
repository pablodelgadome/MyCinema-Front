import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { ModalComentariosPage } from '../modal-comentarios/modal-comentarios.page';
import { ModalDatosPage } from '../modal-datos/modal-datos.page';
import { ModalSalaPage } from '../modal-sala/modal-sala.page';

@Component({
  selector: 'app-modal-filtrado',
  templateUrl: './modal-filtrado.page.html',
  styleUrls: ['./modal-filtrado.page.scss'],
})
export class ModalFiltradoPage implements OnInit {

  categoria : any;
  peliculas: any[] = [];

  constructor(private loadingCtrl: LoadingController,private restService: RestService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.restService.categoria);
    this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.....',
    });
    loading.present();
    setTimeout(() => {
      this.obtenerPeliculas();
      loading.dismiss();
    }, 200);
  }

  obtenerPeliculas() {
    this.restService.obtenerPeliculasFiltro(this.restService.categoria).subscribe((data) => {
      this.peliculas = data;
      console.log(data);
    });
  }

  async abrirmodalSala(id: any) {
    
    const modal = await this.modalCtrl.create({
     component: ModalSalaPage,
     componentProps: {
      id
     }
     
   });
 
   await modal.present();
 
   const { data } = await modal.onDidDismiss();
 
   this.showLoading();
 
   console.log(id);
   }
 
   async abrirmodalComentarios(pelicula:any)
   {
    const modal = await this.modalCtrl.create({
      component: ModalComentariosPage,
      componentProps: {
       pelicula
      }
    });
 
    await modal.present();
 
    const { data } = await modal.onDidDismiss();
 
    this.showLoading();
 
    console.log(pelicula);
   }
 
   async abrirmodalDatos(pelicula:any)
   {
     console.log(pelicula);
    const modal = await this.modalCtrl.create({
      component: ModalDatosPage,
      componentProps: {
       pelicula
      }
    });
 
    await modal.present();
 
    const { data } = await modal.onDidDismiss();
 
    this.showLoading();
   }

   volver()
  {
    this.modalCtrl.dismiss();
  }

}

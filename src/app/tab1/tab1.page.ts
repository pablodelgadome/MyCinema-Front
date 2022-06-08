import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { ModalSalaPage } from '../pages/modal-sala/modal-sala.page';
import { ModalComentariosPage } from '../pages/modal-comentarios/modal-comentarios.page';
import { ModalDatosPage } from '../pages/modal-datos/modal-datos.page';
import { ModalFiltradoPage } from '../pages/modal-filtrado/modal-filtrado.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  peliculas: any[] = [];
  categorias: any[];
  categoriasDisp: any[];
  c: any;

  constructor(
    private restService: RestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    let date: Date = new Date();
    var fecha = date.toISOString().toString();
    console.log(date.toISOString().toString());
    var fecha2 = fecha.slice(0,10)
    console.log(fecha2);
    this.restService.fecha=fecha2;
    console.log(this.restService.token);
    this.showLoading();
    this.obtenerPeliculas();
  }
  

  obtenerPeliculas() {
    this.restService.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data;
      console.log(data);
    });
  }

  filtrado()
  {
    this.categoriasDisp = [];

    for(let i=0; i<this.peliculas.length; i++)
    {
      //console.log(this.peliculas[i]['categoria']);
      this.categoriasDisp.push(this.peliculas[i]['categoria']);
    }
    //console.log(this.categoriasDisp);
  }

  async abrirmodalFiltro() {

    this.restService.categoria=this.c;
    //console.log(this.restService.categoria);
    
    const modal = await this.modalCtrl.create({
     component: ModalFiltradoPage,
     componentProps: {
     }
     
   });
 
   await modal.present();
 
   const { data } = await modal.onDidDismiss();
 
   this.showLoading();
   }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.....',
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.filtrado();
      //console.log(this.peliculas);
    }, 200);
  }

  async abrirmodalSala(pelicula: any) {
    this.restService.pelicula=pelicula;
   const modal = await this.modalCtrl.create({
    component: ModalSalaPage,
    componentProps: {

    }
    
  });

  await modal.present();

  const { data } = await modal.onDidDismiss();

  this.showLoading();

  //console.log(id);
  }

  async abrirmodalComentarios(pelicula:any)
  {
    //console.log(pelicula);
   const modal = await this.modalCtrl.create({
     component: ModalComentariosPage,
     componentProps: {
      pelicula
     }
   });

   await modal.present();

   const { data } = await modal.onDidDismiss();

   this.showLoading();
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

}

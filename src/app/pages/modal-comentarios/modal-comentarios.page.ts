import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { ModalComentarPage } from '../modal-comentar/modal-comentar.page';

@Component({
  selector: 'app-modal-comentarios',
  templateUrl: './modal-comentarios.page.html',
  styleUrls: ['./modal-comentarios.page.scss'],
})
export class ModalComentariosPage implements OnInit {

  @Input() pelicula : any;

  comentario:any;
  valoracion:any;

  comentarios: any[] = [];

  constructor(private restService: RestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.showLoading();
  }

  obtenerComentarios() {
    //console.log(this.pelicula.titulo);
    this.restService.obtenerComentarios(this.pelicula.titulo).subscribe((data) => {
      this.comentarios = data;
      console.log(data);
      //console.log(data[0].usuario.nombre);
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.....',
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.obtenerComentarios();
      this.restService.pelicula=this.pelicula;
      console.log(this.restService.pelicula);
    }, 200);
  }

  async abrirmodalComentar()
  {
    console.log(this.comentarios);
   const modal = await this.modalCtrl.create({
     component: ModalComentarPage,
     componentProps: {
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

  async crear()
  {
    console.log(this.restService.user);
    console.log(this.restService.pelicula);
    console.log(this.comentario);
    console.log(this.valoracion);
     await this.restService.crearComentarioo(this.comentario,this.valoracion,this.restService.pelicula,this.restService.user);
    console.log("Comentario creado");
    //console.log(this.restService.pelicula.titulo);
    this.modalCtrl.dismiss();
  }


}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-modal-comentar',
  templateUrl: './modal-comentar.page.html',
  styleUrls: ['./modal-comentar.page.scss'],
})
export class ModalComentarPage implements OnInit {

  comentario:any;
  valoracion:any;

  constructor(private restService: RestService, private modalCtrl: ModalController) { }

  ngOnInit() {
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

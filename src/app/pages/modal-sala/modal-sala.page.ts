import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { ModalEntradaPage } from '../modal-entrada/modal-entrada.page';

@Component({
  selector: 'app-modal-sala',
  templateUrl: './modal-sala.page.html',
  styleUrls: ['./modal-sala.page.scss'],
})
export class ModalSalaPage implements OnInit {

  salas: any[];
  sala: any;
  complementos: any[];
  complemento: any;

  constructor(private restService: RestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.showLoading();
  }

  obtenerSalas() {
    this.restService.obtenerSalas().subscribe((data) => {
      this.salas = data;
      this.restService.salas=data
      console.log(data);
    });
  }

  obtenerComplementos() {
    this.restService.obtenerComplementos().subscribe((data) => {
      this.complementos = data;
      console.log(data);
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.....',
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.obtenerSalas();
      this.obtenerComplementos();
      console.log(this.salas);
    }, 500);
  }

  async abrirModalEntrada(sala:any,complemento:any) {

    this.restService.salaObject=this.sala

    for(let i = 0 ; i<this.salas.length ; i++)
    {
      if(this.salas[i]['id'] == sala)
      {
        if(this.salas[i]['tridimensional'] == true)
        {
          this.restService.precioTotal=12;
        }
        else
        this.restService.precioTotal=10;
      }
    }

    if(complemento)
    {
      this.restService.precioTotal+=1;
    }

    console.log(this.complemento);
    console.log(this.sala);
    this.restService.sala=this.sala;
    this.restService.complemento=this.complemento;
    
    const modal = await this.modalCtrl.create({
     component: ModalEntradaPage,
     componentProps: {

     }
     
   });
 
   await modal.present();
 
   const { data } = await modal.onDidDismiss();
 
   this.showLoading();
   }

}

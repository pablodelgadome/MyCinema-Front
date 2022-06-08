import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { ModalCompletadoPage } from '../modal-completado/modal-completado.page';
import { ModalErrorPage } from '../modal-error/modal-error.page';

@Component({
  selector: 'app-modal-entrada',
  templateUrl: './modal-entrada.page.html',
  styleUrls: ['./modal-entrada.page.scss'],
})
export class ModalEntradaPage implements OnInit {

  asientosOcupados:any[] = [];
  complemento:any[] = [];
  entradas:any[] = [];
  sala:any[] = [];
  butaca:any;
  fila:any;

  butacas:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  filas:any[] = [1,2,3,4,5,6,7,8];

  libre:any;

  p:any;

  constructor(private loadingCtrl: LoadingController,private restService: RestService,private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.restService.salas);
    this.showLoading();
    this.obtener();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.....',
    });
    loading.present();
    setTimeout(() => {
      this.p=this.restService.precioTotal;
      this.obtenerEntradas();
      loading.dismiss();
    }, 500);
  }

  async obtenerEntradas()
  {
    await this.restService.obtenerEntradas().subscribe((data) => {
      this.entradas = data;
    });
  }

  async obtener()
  {
    await this.restService.obtenerComplementos().subscribe((data) => {
      for(let i = 0 ; i<data.length ; i++ )
      {
        if(data[i].nombre === this.restService.complemento)
        {
          this.complemento.push(data[i]);
        }
      }
      console.log(this.complemento[0]);
      
    });

    await this.restService.obtenerSalas().subscribe((data) => {
      for(let i = 0 ; i<data.length ; i++ )
      {
        if(data[i].id === this.restService.sala)
        {
          console.log(data[i]);
          this.sala.push(data[i]);
        }
      }
      console.log(this.sala[0]);
      
    });
  }

  async reservar(butaca:any,fila:any)
  {
    console.log(this.restService.sala);
    console.log(this.complemento)
    console.log(this.entradas);

    for(let i = 0 ; i<this.entradas.length ; i++)
    {
      if(this.butaca == this.entradas[i]['butaca'] && this.fila == this.entradas[i]['fila'])
        {
          this.libre=false;
          this.abrirModalError(butaca,fila);
        }
        else
        {
          this.libre=true;
        }
    }

    if(this.libre===true)
    {
      for(let i = 0 ; i<this.restService.salas.length ; i++)
      if(this.restService.salas[i]['id'] == this.restService.salaObject)
      {
        this.restService.comprarEntrada(this.restService.fecha,this.restService.precioTotal,this.complemento[0],this.restService.pelicula,this.restService.salas[i],this.restService.user,this.butaca,this.fila);
        console.log("Entrada comprada");
        this.abrirModalCompletado();
      }
    }
    else
    console.log('Ocupado');

  }

  async abrirModalError(butaca:any,fila:any) {
    var b = butaca;
    var f = fila;
    const modal = await this.modalCtrl.create({
     component: ModalErrorPage,
     componentProps: {
      b,
      f
     }
     
   });
 
   await modal.present();
 
   const { data } = await modal.onDidDismiss();
 
   this.showLoading();
   }

   async abrirModalCompletado() {
    const modal = await this.modalCtrl.create({
     component: ModalCompletadoPage,
     componentProps: {
     }
     
   });
 
   await modal.present();
 
   const { data } = await modal.onDidDismiss();
 
   this.showLoading();
   }

}

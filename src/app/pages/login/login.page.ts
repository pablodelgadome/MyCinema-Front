import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { ModalLoginErrorPage } from '../modal-login-error/modal-login-error.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mail:any;
  pass:any;
  ofertas:any[];
  activo:any;

  constructor(private restService: RestService, private loadingCtrl: LoadingController, private route: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  check()
  {
    this.restService.login(this.mail,this.pass).subscribe( data => {

      this.restService.user=data;

      if(data['role'] === 'ROLE_CLIENTE')
      {
      this.route.navigate(['/tabs/tabs/tab1']);
      }
      else
      console.log("Inactivo");
      });
  }

log()
{
  this.restService.login(this.mail,this.pass).subscribe( data => {
    console.log(data);
    this.restService.activo = data['activo']
    this.restService.token = data['token']

  });
}

async showLoading() {
  const loading = await this.loadingCtrl.create({
  message: 'Loading.....'
  });  
  loading.present();
  setTimeout(() => {
    loading.dismiss();
    this.check();
  }, 500 );
}

async abrirmodalDatos(pelicula:any)
{
  console.log(pelicula);
 const modal = await this.modalCtrl.create({
   component: ModalLoginErrorPage,
   componentProps: {
   }
 });

 await modal.present();

 const { data } = await modal.onDidDismiss();

 this.showLoading();
}

registrarme()
{
  this.route.navigate(['/register']);
}

}

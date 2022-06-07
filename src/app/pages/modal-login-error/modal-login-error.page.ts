import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-login-error',
  templateUrl: './modal-login-error.page.html',
  styleUrls: ['./modal-login-error.page.scss'],
})
export class ModalLoginErrorPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ok()
  {
    this.modalCtrl.dismiss();
  }

}

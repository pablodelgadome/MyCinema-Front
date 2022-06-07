import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.page.html',
  styleUrls: ['./modal-error.page.scss'],
})
export class ModalErrorPage implements OnInit {

  @Input() butaca : any;
  @Input() fila : any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  volver()
  {
    this.modalCtrl.dismiss();
  }

}

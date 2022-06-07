import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-datos',
  templateUrl: './modal-datos.page.html',
  styleUrls: ['./modal-datos.page.scss'],
})
export class ModalDatosPage implements OnInit {

  @Input() pelicula : any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  volver()
  {
    this.modalCtrl.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dni:any;
  nombre:any;
  email:any;
  password:any;
  c_password:any;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  regris() {
    this.restService.register(this.dni,this.nombre,this.email,this.password);
    console.log("Registrado");
  }

}

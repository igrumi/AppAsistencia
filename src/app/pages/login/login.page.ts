import { Component } from '@angular/core';
import { showAlertDUOC } from 'src/app/model/Message';
import { AuthService } from 'src/app/services/authentication.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  correo: string = '';
  password: string = '';
  darkMode: boolean = false;

  constructor(private auth: AuthService, private readonly dbService:  DatabaseService) {
    this.correo = 'atorres@duocuc.cl';
    this.password = '1234';
    //mostrarEjemplosDeMensajes();
    const prefersDark = window.matchMedia('prefers-color-scheme: dark');
    this.darkMode = prefersDark.matches;
  }

  intercambiarModoOscuro(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  async ingresar() {
    console.log("asd  ")
    //this.auth.login(this.correo, this.password);
    this.auth.login(this.correo, this.password)
    /*
    this.dbService.readUsers().then(res => {
      console.log(res);
    })*/
  }

  registrar() {
    showAlertDUOC('Programa aquí el registro de nuevos usuarios.');
  }

}

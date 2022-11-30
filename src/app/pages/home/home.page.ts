import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public usuario: Usuario;


  constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController,
      private readonly storage: StorageService) {
  } 

  public ngOnInit() {
    this.storage.getItem('USER_DATA').then(res => {
      console.log('aca esta el usuario que logeo');
      console.log(res);
    });
  }



}


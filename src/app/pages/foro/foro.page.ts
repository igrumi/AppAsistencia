import { Component, OnInit } from '@angular/core';
import { APIClientService } from './../../services/apiclient.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit{
  // Esta propiedad se liga por ngModel con el "ion-select" que muestra los usuarios "Publicadores".
  selectedUserId: number;

  // Esta propiedad se usa para mostrar por medio de *ngFor="let u of usuarios", todos los
  // usuarios que se despliegan en la lista de usuarios "Publicadores" de "ion-select".
  usuarios: any;

  // Esta propiedad se usa para mantener los datos de la nueva publicación o de la
  // edición de una publicación ya existente. Para ello la propiedad se liga usando
  // ngModel con las cajas de texto de: Título y Cuerpo, junto con respaldar los datos
  // de: Id de publicación, Id del usuario que hizo la publicación y su nombre.


  // Esta propiedad se usa para mantener el listado de "Publicaciones recientes". El listado
  // se mantiene siempre actualizado en la página, ya que el "ion-list" matiene todos
  // "ion-item" con los datos de la interpolación de los campos. Los registros de las
  // publicaciones son actualizados por medio de la directiva *ngFor="let p of publicaciones".
  publicaciones: any;

  // La siguiente es una propiedad auxiliar, que se usa nada más que para que el programador
  // pueda ver mientras programa, que cuál es el Id de usuario y Id de publicación que
  // se está ingresando o editando en las cajas de texto de: Título y Cuerpo.
  // Una vez que el programa funcione correctamente, el programador puede eliminar y
  // ocultar estos datos.
  publicacionSeleccionada: string;

  constructor(
    private api: APIClientService,
    private toastController: ToastController) {
  }


  ngOnInit() {
    this.api.getPublicaciones().subscribe(res => {
      this.publicaciones = res;
      console.log(this.publicaciones)
    })
  }
}

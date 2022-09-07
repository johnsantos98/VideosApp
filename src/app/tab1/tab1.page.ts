import { IFilme } from './models/iFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

titulo = 'Videos';
listaVideos: IFilme[] = [
{
  nome: 'Redenção (2011)',
  lancamento: '23/09/2011 (BR)',
  duracao: '2h 9m',
  classificacao: 76,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u9QD9ddSVeYJABMSqBwfqe0NmsJ.jpg',
  generos: ['Ação', 'Thriller', 'Crime']
},
{
  nome:'Doutor Estranho no Multiverso da Loucura (2022)',
  lancamento:'05/05/2022 (BR)',
  duracao:'2h 6m',
  classificacao: 0,
  cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg',
  generos:['Fantasia', 'Ação', 'Aventura']
}
];

  constructor(public alertController: AlertController,public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Important message',
      message: 'Deseja realmente favoritar o filme?',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async apresentarToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 1500,
      color:'success'
    });

    await toast.present();
  }


}




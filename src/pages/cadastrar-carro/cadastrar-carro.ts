import { CadastrarCarroProvider } from './../../providers/cadastrar-carro/cadastrar-carro';
import { Cadastrocarro } from './../../models/cadastro-carro.interface';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';


/**
 * Generated class for the CadastrarCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-carro',
  templateUrl: 'cadastrar-carro.html',
})
export class CadastrarCarroPage {

  img = "";
  cadastrarCarro = {} as Cadastrocarro;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cadcarropv: CadastrarCarroProvider, private alertCtrl: AlertController, private viewCtrl: ViewController) {
  }


  cadastra(carro: Cadastrocarro) {
    this.cadcarropv.addCarro(carro).then(() => {
      let alert = this.alertCtrl.create({
        title: "Carro cadastrado  com sucesso!!",
        message: "retornar para pagina principal",
        buttons: [{
          text: "ok",
          handler: data => {
            this.navCtrl.setRoot('GaleriaPage');
          }
        }]
      })
      alert.present();
    });
  }

}

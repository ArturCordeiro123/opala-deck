import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Cadastrocarro } from '../../models/cadastro-carro.interface';
import { CadastrarCarroProvider } from '../../providers/cadastrar-carro/cadastrar-carro';
import { Subscription } from 'rxjs';

/**
 * Generated class for the EditCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-carro',
  templateUrl: 'edit-carro.html',
})
export class EditCarroPage {
  id = "";
  cadastrarCarro = {} as Cadastrocarro;
  subscription: Subscription;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cadCarropv: CadastrarCarroProvider, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.subscription = this.cadCarropv.listarCarro(this.id).subscribe(res => {
      this.cadastrarCarro = res;
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  editar() {
    this.cadCarropv.atualizarCarro(this.cadastrarCarro, this.id).then(() => {
      this.navCtrl.setRoot('GaleriaPage');
    });
  }
  excluirCarroopala() {
    this.cadCarropv.excluirCarro(this.id).then(() => {
      this.navCtrl.setRoot('GaleriaPage');
    });
  }

}

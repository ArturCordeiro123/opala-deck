import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ActionSheetController } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { Cadastrocarro } from '../../models/cadastro-carro.interface';
import { CadastrarCarroProvider } from '../../providers/cadastrar-carro/cadastrar-carro';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  cadastraCarro: Cadastrocarro[];
  subscription: Subscription;
  bannerConfig: AdMobFreeBannerConfig = {
    id: 'ca-app-pub-4588443419990768/2769983477',
    isTesting: false,
    autoShow: true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private cadcarropv: CadastrarCarroProvider, private admobFree: AdMobFree) {
    this.menuCtrl.swipeEnable(true);


  }

  ionViewDidLoad() {
    this.subscription = this.cadcarropv.listarCarros().subscribe(res => {
      this.cadastraCarro = res;

    });
    this.admobFree.banner.config(this.bannerConfig);
    this.admobFree.banner.prepare();

  }
  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  editar(id: string) {
    this.navCtrl.setRoot('EditCarroPage', { id: id });
  }


}

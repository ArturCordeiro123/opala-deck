import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { CadastroUsuario } from './../../models/cadastro-usuario.interface';
/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  alert= this.alertCtrl.create({
    title:'Cadastrado',
    message:'Cadastrado com sucesso ',
    buttons:[{
      text:'ok',
      handler:data=>{
        this.view.dismiss();
      }
    }]
  })
  cadastroUsuario = {} as CadastroUsuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,public alertCtrl:AlertController,public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  async cadastrarUsuario(usuario:CadastroUsuario){
    try {
      const results= await this.afAuth.auth.createUserWithEmailAndPassword(usuario.Email,usuario.senha);
      this.alert.present();
    } catch (error) {
      
    }
  }
}

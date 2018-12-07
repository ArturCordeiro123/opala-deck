import { MenuController } from 'ionic-angular';
import { CadastroUsuario } from './../../models/cadastro-usuario.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  cadastroUsuario = {} as CadastroUsuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,public menuCtrl:MenuController) { 
    this.menuCtrl.swipeEnable(false);
  }
  async login(usuario:CadastroUsuario){
    try {
      const resultados = await this.afAuth.auth.signInWithEmailAndPassword(usuario.Email,usuario.senha).then(()=>{
        this.navCtrl.setRoot('GaleriaPage');
      })
    } catch (error) {
      
    }

  }
  loginGemail(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(()=>{
      this.afAuth.auth.getRedirectResult().then(res=>{
        this.navCtrl.setRoot('GaleriaPage');
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  criarUsuario(){
    this.navCtrl.push('CadastrarPage');
  }
}

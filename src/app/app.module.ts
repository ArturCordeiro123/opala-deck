import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AdMobFree } from '@ionic-native/admob-free';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastrarProvider } from '../providers/cadastrar/cadastrar';
import { CadastrarCarroProvider } from '../providers/cadastrar-carro/cadastrar-carro';

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCtYZm1ZqDEWFIV3cYi_Vjli3sXhhcwItw",
      authDomain: "opala-deck.firebaseapp.com",
      databaseURL: "https://opala-deck.firebaseio.com",
      projectId: "opala-deck",
      storageBucket: "opala-deck.appspot.com",
      messagingSenderId: "49140692501"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CadastrarProvider,
    CadastrarCarroProvider,
    AdMobFree

  ]
})
export class AppModule { }

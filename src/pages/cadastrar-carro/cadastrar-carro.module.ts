import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarCarroPage } from './cadastrar-carro';

@NgModule({
  declarations: [
    CadastrarCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarCarroPage),
  ],
})
export class CadastrarCarroPageModule {}

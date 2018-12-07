import { Cadastrocarro } from './../../models/cadastro-carro.interface';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

/*
  Generated class for the CadastrarCarroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarCarroProvider {
  cadastroCarro={}as Cadastrocarro;
  carro:Observable<Cadastrocarro[]>;
  cadastrarCarroCol:AngularFirestoreCollection<Cadastrocarro >
  
  constructor(private banco:AngularFirestore) {
    this.cadastrarCarroCol = this.banco.collection<Cadastrocarro>('cadastro carro');
    this.carro = this.cadastrarCarroCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Cadastrocarro;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listarCarros(){
    return this.carro;

  }
  listarCarro(id:string){
    return this.cadastrarCarroCol.doc<Cadastrocarro>(id).valueChanges();
  }
  async addCarro(carro:Cadastrocarro){
    return this.cadastrarCarroCol.add(carro);
  }
  atualizarCarro(carro:Cadastrocarro,id:string){
    return this.cadastrarCarroCol.doc(id).update(carro);
  }
  excluirCarro(id:string){
    return this.cadastrarCarroCol.doc(id).delete();
  }

}

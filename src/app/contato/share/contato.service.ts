import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatoRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.contatoRef = this.db.list('contato/');
}

getAll() {
  return this.contatoRef.snapshotChanges().pipe(
    map(changes => {
      return changes.map(m => ({key: m.payload.key, ...m.payload.val() }))
         })
     );
   }


   getByKey(key: string) {
    const path ='contato/'+key;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );
  }


  remove(key: string, filePath: string) {
    this.contatoRef.remove(key);
    }


  }




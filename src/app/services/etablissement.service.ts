// etablissement.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private firestore: AngularFirestore) { }

  getEtablissements() {
    return this.firestore.collection('etablissements').snapshotChanges();
  }

  ajouterEtablissement(etablissement: any) {
    return this.firestore.collection('etablissements').add(etablissement);
  }

  supprimerEtablissement(etablissementId: string) {
    return this.firestore.collection('etablissements').doc(etablissementId).delete();
  }
}

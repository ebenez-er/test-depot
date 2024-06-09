// inscription.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  constructor(private afAuth: AngularFireAuth) { }

  signUp(inscriptionData: any) {
    const { email, password } = inscriptionData;
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}

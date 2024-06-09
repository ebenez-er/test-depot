import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  // Méthode pour attribuer un mot de passe à un utilisateur
  assignPasswordToUser(userId: string, email: string, generatedPassword: string) {
    return new Promise<void>((resolve, reject) => {
      // Créer un nouvel utilisateur avec une adresse e-mail et un mot de passe
      this.auth.createUserWithEmailAndPassword(email, generatedPassword)
        .then((userCredential) => {
          const authUser = userCredential.user;
          const authUserId = authUser.uid;

          // Vérifier que l'ID d'utilisateur Firestore correspond à l'ID d'utilisateur authentifié
          if (userId === authUserId) {
            // Attribuer un mot de passe à l'utilisateur réussi
            this.firestore.collection('utilisateurs').doc(userId).update({
              passwordSet: true  // Marquer que le mot de passe a été défini
            })
              .then(() => {
                console.log('Mot de passe attribué avec succès');
                resolve();
              })
              .catch((error) => {
                console.error('Erreur lors de l\'attribution du mot de passe :', error);
                reject(error);
              });
          } else {
            console.error('ID utilisateur Firestore ne correspond pas à l\'ID utilisateur authentifié');
            reject(new Error('ID utilisateur Firestore ne correspond pas à l\'ID utilisateur authentifié'));
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la création de l\'utilisateur avec mot de passe :', error);
          reject(error);
        });
    });
  }
}

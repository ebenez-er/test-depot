import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private collectionName = 'utilisateurs';
  private roleCollectionName = 'roles';

  constructor(private firestore: AngularFirestore) { }

  ajouterUtilisateur(utilisateur: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set(utilisateur);
  }

  permissionUtilisateur(id: string, permissions: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update({ permissions });
  }

  supprimerUtilisateur(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  getUtilisateurs(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Méthodes de comptage
  getActiveUsersCount(): Observable<number> {
    // Ajouter la logique pour compter les utilisateurs actifs
    return this.firestore.collection(this.collectionName, ref => ref.where('active', '==', true)).valueChanges().pipe(
      map(users => users.length)
    );
  }

  getTotalUsersCount(): Observable<number> {
    return this.firestore.collection(this.collectionName).valueChanges().pipe(
      map(users => users.length)
    );
  }

  getStudentsCount(): Observable<number> {
    return this.firestore.collection(this.collectionName, ref => ref.where('role', '==', 'etudiant')).valueChanges().pipe(
      map(users => users.length)
    );
  }

  getTeachersCount(): Observable<number> {
    return this.firestore.collection(this.collectionName, ref => ref.where('role', '==', 'enseignant')).valueChanges().pipe(
      map(users => users.length)
    );
  }
  getRoles(): Observable<any[]> {
    return this.firestore.collection(this.roleCollectionName).valueChanges({ idField: 'id' });
  }

  ajouterRole(role: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.roleCollectionName).doc(id).set(role);
  }

  modifierRole(id: string, role: any): Promise<void> {
    return this.firestore.collection(this.roleCollectionName).doc(id).set(role, { merge: true });
  }

  supprimerRole(id: string): Promise<void> {
    return this.firestore.collection(this.roleCollectionName).doc(id).delete();
  }
}

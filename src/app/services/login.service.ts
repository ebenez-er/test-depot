import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, UserCredential, updateProfile } from 'firebase/auth';
import { User } from '../model/user.model';
import { getFirestore, doc, getDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loadingCtrl = inject(LoadingController);
  toastCtrl= inject(ToastController);
  router= inject(Router)


  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})
  }
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }
  // Logique pour déterminer si l'utilisateur est un étudiant
  isUserStudent(user: any): boolean {
    // Vous devrez ajuster cette logique en fonction de vos critères
    // Par exemple, vérifiez si l'utilisateur a un rôle d'étudiant, ou utilisez d'autres propriétés
    // Retournez true si l'utilisateur est un étudiant, sinon false
    return user && user.role === 'student'; // Adapté à titre d'exemple
  }


  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  saveInLocalStorage(key : string ,value: any) {
    return localStorage.setItem(key , JSON.stringify(value))
  }

  getFromLocalStorage( key: string) {
    return JSON.parse(localStorage.getItem(key))
  }
  getAuth(){
    return getAuth();
  }

  async signIn(user: User) {
    try {
      return signInWithEmailAndPassword(getAuth(), user.email, user.password);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
      throw error; // Propagez l'erreur pour la gérer ailleurs si besoin
    }
  }

  async signUp(user: User) {
    try {
      return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.message);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
      throw error; // Propagez l'erreur pour la gérer ailleurs si besoin
    }
  }


  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName})


  }

   //-- mot de passe oublier--

   sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  SetDocument(path:string , data: any) {

    return setDoc(doc(getFirestore(), path),data);
  }

  async getDocument(path: string){
    return  (await getDoc(doc(getFirestore(), path))).data();

   }

   async updateDoc(collection: string, docId: string, updatedData: any): Promise<void> {
    const path = `${collection}/${docId}`;
    return updateDoc(doc(getFirestore(), path), updatedData);
  }

  async deleteDoc(collection: string, docId: string): Promise<void> {
    const path = `${collection}/${docId}`;
    return deleteDoc(doc(getFirestore(), path));
  }


}

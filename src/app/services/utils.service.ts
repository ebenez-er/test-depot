import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

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



}

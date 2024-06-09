// inscription.component.ts
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  slideOpts = {
    onlyExternal: true
  };
  lastNameControl = new FormControl('');
  firstNameControl = new FormControl('');

  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  phoneNumberControl = new FormControl('');
  addressControl = new FormControl('');
  dateOfBirthControl = new FormControl('');
  placeOfBirthControl = new FormControl('');
  nationalityControl = new FormControl('');
  constructor(private inscriptionService: InscriptionService) { }
  @ViewChild(Swiper, { static: true }) slides: Swiper;
  next() {
    this.slides.slideNext();
  }


  signUp() {
    const inscriptionData = {
      lastName: this.lastNameControl.value,
      firstName: this.firstNameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      phoneNumber: this.phoneNumberControl.value,
      address: this.addressControl.value,
      dateOfBirth: this.dateOfBirthControl.value,
      placeOfBirth: this.placeOfBirthControl.value,
      nationality: this.nationalityControl.value,
    };

    this.inscriptionService.signUp(inscriptionData).then(user => {
      // utilisateur inscrit avec succès
    }).catch(error => {
      // gérer l'erreur
    });
  }
}

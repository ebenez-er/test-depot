import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.page.html',
  styleUrls: ['./inscriptions.page.scss'],
})
export class InscriptionsPage {
  fileUploads: { [key: string]: File } = {};
  inscriptionForm: FormGroup;
  // Contrôles de formulaire associés aux champs dans le template
  lastNameControl = this.formBuilder.control('', Validators.required);
  emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
  passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);
  phoneNumberControl = this.formBuilder.control('', Validators.required);
  addressControl = this.formBuilder.control('', Validators.required);
  dateOfBirthControl = this.formBuilder.control('', Validators.required);
  placeOfBirthControl = this.formBuilder.control('', Validators.required);
  nationalityControl = this.formBuilder.control('', Validators.required);
  firstNameControl = this.formBuilder.control('', Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.inscriptionForm = this.formBuilder.group({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      placeOfBirth: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      cycle: new FormControl('', Validators.required),
      classe: new FormControl('', Validators.required),
      filiere: new FormControl('', Validators.required)
    });
  }

  onFileChange(documentType: string, event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUploads[documentType] = file;
    }
  }

  async onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      const studentRef = await this.firestore.collection('étudiant').add({
        nom: formData.lastName,
        prenom: formData.firstName,
        email: formData.email,
        telephone: formData.phoneNumber,
        adresse: formData.address,
        date_naissance: formData.dateOfBirth,
        lieu_naissance: formData.placeOfBirth,
        nationalite: formData.nationality,
        cycle: formData.cycle,
        classe: formData.classe,
        filiere: formData.filiere
      });

      for (const documentType in this.fileUploads) {
        if (this.fileUploads.hasOwnProperty(documentType)) {
          const file = this.fileUploads[documentType];
          const filePath = `documents/${studentRef.id}/${documentType}_${file.name}`;
          const fileRef = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);

          task.snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.firestore.collection('étudiant').doc(studentRef.id).collection('documents').doc(documentType).set({
                  url: url,
                  nom_fichier: file.name,
                  type: documentType
                });
              });
            })
          ).subscribe();
        }
      }
    }
  }
}

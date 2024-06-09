import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/student.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Import AngularFireStorage
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  form = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required]),
    date_naissance: new FormControl('', [Validators.required]),
    lieu_naissance: new FormControl('', [Validators.required]),
    nationalite: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mot_de_passe: new FormControl('', [Validators.required]),
    acte_de_naissance: new FormControl(null, [Validators.required]),
    bulletins: new FormControl(null, [Validators.required]),
    demi_carte_photo: new FormControl(null, [Validators.required]),
    diplomes: new FormControl(null, [Validators.required]),
  });

  constructor(
    private etudiantService: EtudiantService,
    private storage: AngularFireStorage // Inject AngularFireStorage
  ) { }

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {
      try {
        const etudiantData = { ...this.form.value };
        delete etudiantData.acte_de_naissance;

        // Obtenez l'ID de l'étudiant (par exemple via Firestore ou une autre source)
        const etudiantId = 'étude'; // Utilisez l'ID correct du document "étude"

        for (const fieldName of Object.keys(this.form.value)) {
          if (fieldName !== 'acte_de_naissance' && this.form.get(fieldName).value instanceof File) {
            const file: File = this.form.get(fieldName).value;
            const downloadURL = await this.uploadFile(file, fieldName);

            const documentData = {
              nom_fichier: file.name,
              type: file.type,
              url: downloadURL
            };

            console.log(`Données du document pour ${fieldName} :`, documentData);

            await this.etudiantService.uploadDocument(etudiantId, fieldName, documentData);
            etudiantData[`${fieldName}_url`] = downloadURL;
          }
        }

        await this.etudiantService.signUp(etudiantData);

      } catch (error) {
        console.log(error);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }





  async uploadFile(file: File, documentType: string): Promise<string> {
    try {
      const filePath = `${documentType}/${Date.now()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      await uploadTask;

      const downloadURL = await fileRef.getDownloadURL().toPromise();
      console.log(`Fichier téléversé avec succès : ${file.name}, URL de téléchargement : ${downloadURL}`);

      return downloadURL;
    } catch (error) {
      console.error('Erreur lors du téléversement du fichier:', error);
      throw new Error('Erreur lors du téléversement du fichier: ' + error.message);
    }
  }


  onFileSelected(event: any, fieldName: string) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Fichier sélectionné:', file);
      this.form.patchValue({
        [fieldName]: file
      });
    }
  }

}

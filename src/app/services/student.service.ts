import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }

  // Inscrire un étudiant et téléverser ses documents
  async signUp<T>(etudiantData: any): Promise<{ id: string; data: T }> {
    try {
      // Ajouter les informations de base de l'étudiant à la collection 'étudiant'
      const etudiantDocRef = await this.firestore.collection('étudiant').add({
        nom: etudiantData.nom,
        prenom: etudiantData.prenom,
        // Ajoutez d'autres champs de base de l'étudiant ici
      });

      const etudiantId = etudiantDocRef.id;

      // Téléverser les documents de l'étudiant et obtenir leurs URL
      await this.uploadDocument(etudiantId, 'acte_de_naissance', etudiantData.acte_de_naissance_url);
      await this.uploadDocument(etudiantId, 'bulletins', etudiantData.bulletins_url);
      // Ajoutez d'autres fichiers de la même manière

      return { id: etudiantId, data: etudiantData };
    } catch (error) {
      throw new Error('Erreur lors de l\'inscription de l\'étudiant: ' + error.message);
    }
  }
  getNombreEtudiantsInscrits(): Observable<number> {
    return this.firestore.collection('étudiant').valueChanges().pipe(
      map(etudiants => etudiants.length)
    );
  }
  // Téléverser un document pour un étudiant
  async uploadDocument(etudiantId: string, documentType: string, documentData: any): Promise<void> {
    try {
      // Vérifiez que documentData contient toutes les propriétés nécessaires
      if (!documentData || !documentData.nom_fichier || !documentData.type || !documentData.url) {
        throw new Error('Données du document incompletes');
      }

      console.log('Téléchargement du document:', { etudiantId, documentType, documentData });

      // Définir le document dans la sous-collection 'documents'
      await this.firestore.collection('étudiant').doc(etudiantId)
        .collection('documents').doc(documentType).set({
          nom_fichier: documentData.nom_fichier,
          type: documentData.type,
          url: documentData.url,
        });
    } catch (error) {
      console.error('Erreur lors du téléchargement du document:', error);
      throw new Error('Erreur lors du téléchargement du document: ' + error.message);
    }
  }

  // Mettre à jour les informations d'un étudiant
  async updateUser(userId: string, updates: any): Promise<boolean> {
    try {
      await this.firestore.collection('étudiant').doc(userId).update(updates);
      return true;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de l\'utilisateur: ' + error.message);
    }
  }

  // Récupérer les informations de profil de l'étudiant
  getStudentProfile(studentId: string): Observable<any> {
    return this.db.object(`/students/${studentId}`).valueChanges();
  }

  // Récupérer les cours de l'étudiant
  getStudentCourses(studentId: string): Observable<any[]> {
    return this.db.list(`/students/${studentId}/courses`).valueChanges();
  }

  // Récupérer l'emploi du temps de l'étudiant
  getStudentSchedule(studentId: string): Observable<any[]> {
    return this.db.list(`/students/${studentId}/schedule`).valueChanges();
  }

  // Récupérer les notes de l'étudiant
  getStudentGrades(studentId: string): Observable<any[]> {
    return this.db.list(`/students/${studentId}/grades`).valueChanges();
  }

  // Récupérer les messages de l'étudiant
  getStudentMessages(studentId: string): Observable<any[]> {
    return this.db.list(`/students/${studentId}/messages`).valueChanges();
  }

  // Récupérer les notifications de l'étudiant
  getStudentNotifications(studentId: string): Observable<any[]> {
    return this.db.list(`/students/${studentId}/notifications`).valueChanges();
  }
}

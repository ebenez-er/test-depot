import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  {FirebaseService} from 'src/app/services/firebase.service';
import { AdminService } from 'src/app/services/admin.service';
import { UtilsService } from 'src/app/services/utils.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  utilisateurForm: FormGroup;
  utilisateurs: any[];
  activeUsersCount: any;
  totalUsersCount: any;
  studentsCount: any;
  teachersCount: any;
  roles: any[]; // Ajout du tableau des rôles
  afficherListeRoles: boolean = false; // Ajout de la variable pour afficher la liste des rôles


  ngOnInit() {
    this.loadUtilisateurs();
    this.getActiveUsersCount();
    this.getTotalUsersCount();
    this.getStudentsCount();
    this.getTeachersCount();
  }
  constructor(private formBuilder: FormBuilder, private adminService: AdminService  ,private firebaseService: FirebaseService,
    private utilsService: UtilsService,) {
    this.utilisateurForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
      // Ajoutez d'autres champs si nécessaire
    });
  }
  loadStatistics() {
    this.totalUsersCount = from(this.firebaseService.getTotalUsersCount());
this.activeUsersCount = from(this.firebaseService.getActiveUsersCount());
this.studentsCount = from(this.firebaseService.getUsersCountByRole('student'));
this.teachersCount = from(this.firebaseService.getUsersCountByRole('teacher'));
  }
  getActiveUsersCount() {
    this.adminService.getActiveUsersCount().subscribe(count => {
      this.activeUsersCount = count;
    });
  }

  getTotalUsersCount() {
    this.adminService.getTotalUsersCount().subscribe(count => {
      this.totalUsersCount = count;
    });
  }

  getStudentsCount() {
    this.adminService.getStudentsCount().subscribe(count => {
      this.studentsCount = count;
    });
  }

  getTeachersCount() {
    this.adminService.getTeachersCount().subscribe(count => {
      this.teachersCount = count;
    });
  }

  ajouterUtilisateur() {
    if (this.utilisateurForm.valid) {
      const utilisateurData = this.utilisateurForm.value;
      this.adminService.ajouterUtilisateur(utilisateurData)
        .then(() => {
          console.log('Utilisateur ajouté avec succès');
          this.utilisateurForm.reset();
          this.loadUtilisateurs();
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        });
    }
  }

  permissionUtilisateur(id: string, permissions: any) {
    this.adminService.permissionUtilisateur(id, permissions)
      .then(() => {
        console.log('Permissions mises à jour avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour des permissions :', error);
      });
  }

  supprimerUtilisateur(id: string) {
    this.adminService.supprimerUtilisateur(id)
      .then(() => {
        console.log('Utilisateur supprimé avec succès');
        this.loadUtilisateurs();
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      });
  }

  loadUtilisateurs() {
    this.adminService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }
  afficherRoles() {
    this.afficherListeRoles = true;
    this.adminService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  // Méthode pour modifier un rôle
  modifierRole(id: string) {
    // Implémentez la logique pour modifier un rôle
  }

  // Méthode pour supprimer un rôle
  supprimerRole(id: string) {
    // Implémentez la logique pour supprimer un rôle
  }
}




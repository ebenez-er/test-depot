// home.component.ts
import { Component, OnInit } from '@angular/core';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  etablissements: any[] = [];

  constructor(private etablissementService: EtablissementService, private router: Router) { }

  ngOnInit() {
    this.etablissementService.getEtablissements().subscribe((data) => {
      this.etablissements = data.map((e) => {
        const data = e.payload.doc.data();
        return typeof data === 'object' ? { id: e.payload.doc.id, ...data } : { id: e.payload.doc.id };
      });
    });
  }

  ouvrirConnexion(etablissementId: string) {
    this.router.navigate(['/connexion', etablissementId]);
  }

  supprimerEtablissement(etablissementId: string) {
    this.etablissementService.supprimerEtablissement(etablissementId).then(() => {
      console.log('Etablissement supprimé avec succès !');
    }).catch((error) => {
      console.error('Erreur lors de la suppression de l\'établissement : ', error);
    });
  }
}

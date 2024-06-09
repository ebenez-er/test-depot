import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtudiantService } from 'src/app/services/student.service';

@Component({
  selector: 'app-directeur-des-etudes',
  templateUrl: './directeur-des-etudes.page.html',
  styleUrls: ['./directeur-des-etudes.page.scss'],
})
export class DirecteurDesEtudesPage implements OnInit {

  nombreEtudiants: number;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    // Appel de la méthode du service pour obtenir le nombre d'étudiants inscrits
    this.etudiantService.getNombreEtudiantsInscrits().subscribe(nombre => {
      this.nombreEtudiants = nombre;
    });
  }

  isSubMenuOpen = {
    classe: false,
    enseignant: false,
    etudiant: false,
    'emploi-du-temps': false
  };

  toggleSubMenu(menu: string) {
    this.isSubMenuOpen[menu] = !this.isSubMenuOpen[menu];
  }

  

  getFilière (){

  }
}

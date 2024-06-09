import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directeur',
  templateUrl: './directeur.page.html',
  styleUrls: ['./directeur.page.scss'],
})
export class DirecteurPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ajouterFilière (){
// possibilité d'ajouter une filière
  }
  SupprimerFilière (){

  }
   modifierFilière (){
// modifer les informations de la filière
  }
  ajouterClasse(){
// possibilité d'ajouter une classe
  }
  SupprimerClasse(){
      //possibilité de supprimer une clase
  }
  modifierClasse (){

    // modifier_classe
  }
  ajouterPersonnel (){
    // ajouter personnel
  }
  modifierPersonnel(){

  }
  supprimerPersonnel (){

  }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'secretary',
    loadChildren: () => import('./pages/secretary/secretary.module').then( m => m.SecretaryPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'directeur',
    loadChildren: () => import('./pages/directeur/directeur.module').then( m => m.DirecteurPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/tabs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'communications',
    loadChildren: () => import('./pages/communications/communications.module').then( m => m.CommunicationsPageModule)
  },
  {
    path: 'inscriptions',
    loadChildren: () => import('./pages/inscriptions/inscriptions.module').then( m => m.InscriptionsPageModule)
  },
  {
    path: 'directeur-des-etudes',
    loadChildren: () => import('./pages/directeur-des-etudes/directeur-des-etudes.module').then( m => m.DirecteurDesEtudesPageModule)
  },
  {
    path: 'enseignant',
    loadChildren: () => import('./pages/enseignant/enseignant.module').then( m => m.EnseignantPageModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./pages/etudiant/etudiant.module').then( m => m.EtudiantPageModule)
  },
  {
    path: 'surveillant',
    loadChildren: () => import('./pages/surveillant/surveillant.module').then( m => m.SurveillantPageModule)
  },
  {
    path: 'bulletins',
    loadChildren: () => import('./pages/bulletins/bulletins.module').then( m => m.BulletinsPageModule)
  },
  {
    path: 'carte-scolaire',
    loadChildren: () => import('./pages/carte-scolaire/carte-scolaire.module').then( m => m.CarteScolairePageModule)
  },
  {
    path: 'finances',
    loadChildren: () => import('./pages/finances/finances.module').then( m => m.FinancesPageModule)
  },
  {
    path: 'personnels',
    loadChildren: () => import('./pages/personnels/personnels.module').then( m => m.PersonnelsPageModule)
  },
  {
    path: 'emplois-du-temps',
    loadChildren: () => import('./pages/emplois-du-temps/emplois-du-temps.module').then( m => m.EmploisDuTempsPageModule)
  },
  {
    path: 'parents',
    loadChildren: () => import('./pages/parents/parents.module').then( m => m.ParentsPageModule)
  },
  {
    path: 'comptable',
    loadChildren: () => import('./pages/comptable/comptable.module').then( m => m.ComptablePageModule)
  },
  {
    path: 'profils',
    loadChildren: () => import('./pages/profils/profils.module').then( m => m.ProfilsPageModule)
  },
  {
    path: 'salles',
    loadChildren: () => import('./pages/salles/salles.module').then( m => m.SallesPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'groupes',
    loadChildren: () => import('./pages/groupes/groupes.module').then( m => m.GroupesPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./pages/cours/liste-cours/liste-cours.module').then( m => m.ListeCoursPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

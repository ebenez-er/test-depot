import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch : 'full'
  },

  {
    path: 'tabs',
    loadComponent: () => import('./tabs.page').then(m=>m.TabsPage)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.component').then((Ac) => Ac.AppComponent),
  },
  {
    path: '**',
    redirectTo: () => {
      console.warn('no_path_found');
      return '';
    },
  },
];

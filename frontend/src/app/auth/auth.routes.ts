import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.component'),
  },
] as Routes;

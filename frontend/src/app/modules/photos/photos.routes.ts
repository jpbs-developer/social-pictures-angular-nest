import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./photos-list/photos-list.component'),
  },
] as Routes;

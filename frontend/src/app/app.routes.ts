import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ModulesComponent } from './modules/modules.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'plataform',
    component: ModulesComponent,
    loadChildren: () => import('./modules/modules.routes'),
  },
];

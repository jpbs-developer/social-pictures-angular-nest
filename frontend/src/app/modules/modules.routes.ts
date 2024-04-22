import { Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

export default [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  {
    path: 'photos',
    component: PhotosComponent,
    loadChildren: () => import('./photos/photos.routes'),
  },
] as Routes;

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'add-friend',
    loadComponent: () =>
      import('./add-friend/add-friend.component').then(m => m.AddFriendComponent),
  },
];
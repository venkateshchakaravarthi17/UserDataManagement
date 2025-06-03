import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFriendComponent } from './add-friend/add-friend.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-friend', component: AddFriendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

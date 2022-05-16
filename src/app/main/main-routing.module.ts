import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';
import { MainComponent } from './main.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [UserGuard]
      },
      { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
      { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AdminGuard] },
      { path: 'my-profile', component: MyProfileComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

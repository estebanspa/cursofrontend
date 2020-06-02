import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AuthGuard } from './auth/auth.guard';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'index', 
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people', 
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
    canActivate: [AuthGuard]
  },
  { path: 'people/:id', component: PeopleDetailComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleGuard } from './people.guard';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: ':id',
    component: PeopleDetailComponent,
    canDeactivate: [PeopleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

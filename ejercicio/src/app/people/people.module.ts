import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleToolbarComponent } from './people-toolbar/people-toolbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeopleListComponent, PeopleToolbarComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }

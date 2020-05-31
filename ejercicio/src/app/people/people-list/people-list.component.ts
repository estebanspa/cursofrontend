import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ReplaySubject } from 'rxjs';
import { People } from '../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public dataSource$: ReplaySubject<People[]> = new ReplaySubject(1);
  public displayedColumns: string[]
  
  
  constructor(private peopleService: PeopleService ) { 
    this.peopleService.getPeopleList().subscribe( obs => {
      this.dataSource$.next(obs);
    })
  }

  getListColumns(listColumns: string[]){
    this.displayedColumns = listColumns
  }

  ngOnInit(): void {
  }

}

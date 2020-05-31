import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public displayedColumns: string[]
  public dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private peopleService: PeopleService ) { 
    this.peopleService.getPeopleList().subscribe( obs => {
      this.dataSource.data = obs
    })
  }

  getListColumns(listColumns: string[]){
    this.displayedColumns = listColumns
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}

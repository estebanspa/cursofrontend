import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-toolbar',
  templateUrl: './people-toolbar.component.html',
  styleUrls: ['./people-toolbar.component.css']
})
export class PeopleToolbarComponent implements OnInit {
  public columnasList: string[] = ['Id','Nombre','Edad','Ciudad'];
  public selectedValues: string[];
  @Output() listColumnsEvent = new EventEmitter<string[]>();
  
  constructor() { }

  ngOnInit(): void {
    this.listColumnsEvent.emit(this.columnasList)
  }

  updateColumnList() {
    if(this.selectedValues.length) {
      this.listColumnsEvent.emit(this.selectedValues)
    }
    else{
      this.listColumnsEvent.emit(this.columnasList)
    }
  }

}

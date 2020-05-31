import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleList: People[] = [
    {Id: 1, Nombre: "Juan Perez", Edad: 34, Ciudad: "Rosario"},
    {Id: 2, Nombre: "Pablo Garcia", Edad: 50, Ciudad: "Buenos Aires"},
    {Id: 3, Nombre: "Matias Fernandez", Edad: 18, Ciudad: "Rafaela"},
    {Id: 4, Nombre: "David Gonzalez", Edad: 23, Ciudad: "Coronda"},
    {Id: 5, Nombre: "Leandro Rosas", Edad: 33, Ciudad: "Rosario"},
    {Id: 6, Nombre: "Lucas Benitez", Edad: 44, Ciudad: "Santa Fe"},
    {Id: 7, Nombre: "Daniel Dias", Edad: 27, Ciudad: "Rosario"},
  ];

  constructor() { }

  public getPeopleList(): Observable<People[]> {
    return new Observable<People[]>(obs =>{
      obs.next(this.peopleList)
    })
  }

}

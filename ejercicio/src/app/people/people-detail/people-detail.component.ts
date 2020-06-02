import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../models/people';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {
  people: People;
  public peopleDetailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  canDeactivate(): boolean {
    if (this.peopleDetailForm.dirty) {
      return window.confirm('¿Desea perder los cambios realizados?');
    }
    return true;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeople(id).subscribe(people => this.people = people);
    this.peopleDetailForm.setValue({
      name: this.people.Nombre,
      age: this.people.Edad,
      city: this.people.Ciudad
    })
    this.peopleDetailForm.reset(this.peopleDetailForm.value);
  }

  onSubmit() {
    this.people.Nombre = this.peopleDetailForm.get('name').value;
    this.people.Ciudad = this.peopleDetailForm.get('city').value;
    this.people.Edad = this.peopleDetailForm.get('age').value;
    this.peopleService.guardarPeople(this.people);
    this.peopleDetailForm.reset(this.peopleDetailForm.value);
    this.dialog.open(ElementSaveDialog);
  }

  gotoPeople() {
    this.router.navigate(['/people']);
  }
}

@Component({
  selector: 'element-save-dialog',
  templateUrl: 'element-save-dialog.html',
})
export class ElementSaveDialog { }

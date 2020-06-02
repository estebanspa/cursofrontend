import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../models/people';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {
  public peopleDetailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  people: People;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getPeople()
  }

  onSubmit() {
    this.peopleService.guardarPeople(this.people);

  }

  getPeople(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeople(id)
      .subscribe(people => this.people = people);
  }

  gotoPeople() {
    this.router.navigate(['/people']);
  }

}

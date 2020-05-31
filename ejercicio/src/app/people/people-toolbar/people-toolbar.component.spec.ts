import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleToolbarComponent } from './people-toolbar.component';

describe('PeopleToolbarComponent', () => {
  let component: PeopleToolbarComponent;
  let fixture: ComponentFixture<PeopleToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

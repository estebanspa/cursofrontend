import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { User } from '../../core/Models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);

  constructor() { 
    

  }

  login(name, pass): Boolean {
    let user = new User();
    user.username = name;
    user.password = pass;
    this.currentUser$.next(user);
    return true;
    }

    logout(): Boolean {
      this.currentUser$.next(null);
      return true;
      }
}

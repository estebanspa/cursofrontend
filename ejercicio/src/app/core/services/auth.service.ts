import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../models/user';
import { AuthApiService } from '../../auth/services/auth-api.service'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);
  public isLoggedIn: boolean = false

  constructor(private authApiService: AuthApiService,
    private router: Router) {
  }

  login(name, pass) {
    let user = new User();
    user.username = name;
    user.password = pass;
    this.authApiService.login(name, pass).subscribe(data => {
      if (data) {
        this.currentUser$.next(user);
        this.isLoggedIn = true;
        this.router.navigate(['people']);
      }
    });
  }

  logout(): Boolean {
    this.currentUser$.next(null);
    this.isLoggedIn = false;
    return true;
  }
}

import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service'
import { User } from './core/models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio';
  public currentUser: User;

  constructor(public authService: AuthService){
  }

  public ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: User) => {
      this.currentUser = user;
    });
  }

  public logout() {
        this.authService.logout();
      }

}

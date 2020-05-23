import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../core/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value )){
      console.warn('login exitoso');
      this.router.navigate(['index']);
    } 
  }
  

  ngOnInit(): void {
    
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.html',
  styleUrl: './login-view.scss',
  standalone: false,
})
export class LoginView {

  constructor(private router: Router) {}

  onLoginButtonClick() {
    this.router.navigate(['/program']);
  }
}

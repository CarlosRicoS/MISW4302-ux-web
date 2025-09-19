import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.html',
  styleUrl: './login-button.scss',
  standalone: false,
})
export class LoginButton {
  @Input() label: string = 'Microsoft';
  @Input() iconSrc: string = '/Icon-microsoft.svg';
}

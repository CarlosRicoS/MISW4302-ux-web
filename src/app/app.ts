import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from './common/common.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { 'class': 'app-root', '[style.height]': '"100vh"', '[style.display]': '"block"' },
})
export class App {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from './common/common.module';
import { ViewsModule } from './views/views-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ViewsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { 'class': 'app-root', '[style.height]': '"100vh"', '[style.display]': '"block"' },
})
export class App {}

import { Component, model } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  standalone: false,
})
export class Calendar {
  selected = model<Date | null>(new Date());
  
}

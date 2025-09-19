import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-item',
  templateUrl: './alarm-item.html',
  styleUrl: './alarm-item.scss',
  standalone: false,
})
export class AlarmItem {

  @Input() isChallenge: boolean = true;
}

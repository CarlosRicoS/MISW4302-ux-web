import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-chart',
  templateUrl: './container-chart.html',
  styleUrls: ['./container-chart.scss'],
  standalone: false
})
export class ContainerChart {

  @Input() title: string = '';
  @Input() hasGeneralToggle: boolean = false;
  @Input() hasDateHeader: boolean = false;
}

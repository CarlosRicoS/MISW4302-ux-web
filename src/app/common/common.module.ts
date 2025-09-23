import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContainerChart } from './components/container-chart/container-chart';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBar } from './components/nav-bar/nav-bar';
import { MatToolbar } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { AlarmItem } from './components/alarm-item/alarm-item';
import { Calendar } from './components/calendar/calendar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Spinner } from './components/spinner/spinner';
import { Summary } from './components/summary/summary';
import { ChartContent } from './components/chart-content/chart-content';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginButton } from './components/login-button/login-button';

@NgModule({
  declarations: [
    NavBar,
    ContainerChart,
    AlarmItem,
    Calendar,
    Spinner,
    Summary,
    ChartContent,
    LoginButton,
  ],
  imports: [
    AngularCommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbar,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTabsModule,
],
  exports: [
    NavBar,
    ContainerChart,
    AlarmItem,
    Calendar,
    Spinner,
    Summary,
    ChartContent,
    LoginButton,
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class CommonModule { }

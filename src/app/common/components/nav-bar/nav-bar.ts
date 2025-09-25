import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, takeUntil, filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  standalone: false,
  host: { 'class': 'nav-bar', '[style.height]': '"100vh"', '[style.display]': '"block"' },

})
export class NavBar implements OnInit, OnDestroy {

  @Input() selectedMenu: string = 'programa';
  private _formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private destroy$ = new Subject<void>();
  
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  ngOnInit() {
    // Listen to route changes and update selectedMenu
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateSelectedMenuFromUrl(event.url);
      });

    // Set initial selectedMenu based on current URL
    this.updateSelectedMenuFromUrl(this.router.url);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateSelectedMenuFromUrl(url: string) {
    // Extract the menu from the URL
    if (url.includes('/program') || url === '/') {
      this.selectedMenu = 'programa';
    } else if (url.includes('/progress')) {
      this.selectedMenu = 'progreso';
    }
  }

  onLogout() {
    this.router.navigate(['/login']);
  }

  navigateTo() {
    switch (this.selectedMenu) {
      case 'programa':
        this.router.navigate(['/program']);
        break;
      case 'progreso':
        this.router.navigate(['/progress']);
        break;
      default:
        this.router.navigate(['/program']);
        break;
    }
  }

}

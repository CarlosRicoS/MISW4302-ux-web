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
    if (url.includes('/programa') || url === '/') {
      this.selectedMenu = 'programa';
    } else if (url.includes('/progreso')) {
      this.selectedMenu = 'progreso';
    } else if (url.includes('/perfil')) {
      this.selectedMenu = 'perfil';
    }
  }

}

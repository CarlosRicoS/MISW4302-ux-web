import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNativeDateAdapter({
      parse: {
        dateInput: 'LL',
      },
      display: {
        dateInput: 'input',
        dateA11yLabel: 'LL',
        monthYearLabel: 'MMMM YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
      }
    }),
    {provide: MAT_DATE_LOCALE, useValue: 'es-LA'},
  ]
};

import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { defaultToastConfig } from './export';
import { ToastConfig } from './interface/app.interface';
export const TOAST_CONFIG = new InjectionToken<ToastConfig>('ToastConfig');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(), // Toastr providers
    { provide: TOAST_CONFIG, useValue: defaultToastConfig },
  ],
};

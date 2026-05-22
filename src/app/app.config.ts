import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { routes } from './app.routes';

import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),

    provideAnimationsAsync(),

    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

    MessageService

  ]
};
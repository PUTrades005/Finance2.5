import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // <-- Import the routes here

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // <-- Provide the router with your defined routes
    // ... other providers (HttpClient, Animations, etc.)
  ]
};

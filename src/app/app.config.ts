import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'; // Import Auth providers
// Import other Firebase service providers if you use them (e.g., provideFirestore, provideStorage)

import { environment } from '../environments/environment'; // Your Firebase config

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Add Firebase providers directly to the providers array
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

    // If you were importing NgModules, you would use importProvidersFrom like this:
    // importProvidersFrom(MyNgModule),

    // Add other application providers here (e.g., provideHttpClient)
    // provideHttpClient(),
  ]
};

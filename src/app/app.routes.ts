import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

// Make sure AboutComponent is imported
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },

  // Make sure this route for the About page exists
  { path: 'about', component: AboutComponent },

  // ... potentially other routes
];

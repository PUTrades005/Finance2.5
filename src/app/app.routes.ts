import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';       // Import Home Component
import { AboutComponent } from './about/about.component';     // Import About Component
import { SettingsComponent } from './settings/settings.component'; // Import Settings Component

export const routes: Routes = [
  { path: '', component: HomeComponent },     // Route for the root path
  { path: 'about', component: AboutComponent }, // Route for the /about path
  { path: 'settings', component: SettingsComponent }, // Route for the /settings path
  // Optional: Add a route for 404 page here if needed
  // { path: '**', component: PageNotFoundComponent }
];

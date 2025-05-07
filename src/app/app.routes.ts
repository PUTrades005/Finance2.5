import { Routes } from '@angular/router';
// import { AppComponent } from './app.component'; // You might not need this import anymore if AppComponent isn't routed

import { HomeComponent } from './home/home.component'; // <-- Import the HomeComponent you just created

export const routes: Routes = [
  { path: '', component: HomeComponent }, // <-- Change this route to use HomeComponent for the root path
  // Add other routes here as you create more components (e.g., for /about, /contact, etc.)
  // Example: { path: 'about', component: AboutComponent },
];

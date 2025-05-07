import { Routes } from '@angular/router';

// Import all the components that you want to be able to navigate to
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './auth/signup/signup.component'; // Import SignupComponent
import { SigninComponent } from './auth/signin/signin.component'; // Import SigninComponent


// Define your routes array
export const routes: Routes = [
  // Route for the root path (''). Loads HomeComponent.
  { path: '', component: HomeComponent },

  // Route for the '/about' path. Loads AboutComponent.
  { path: 'about', component: AboutComponent },

  // Route for the '/settings' path. Loads SettingsComponent.
  { path: 'settings', component: SettingsComponent },

  // Route for the '/signup' path. Loads SignupComponent.
  { path: 'signup', component: SignupComponent },

  // Route for the '/signin' path. Loads SigninComponent.
  { path: 'signin', component: SigninComponent },

  // Optional: Wildcard route for any path that doesn't match the above.
  // You would typically show a 404 "Page Not Found" component here.
  // { path: '**', component: PageNotFoundComponent }
];

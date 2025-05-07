import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../auth.service'; // Import the authentication service (relative path)
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-signin', // How you use this component in HTML
  standalone: true,     // This component is standalone
  imports: [
    CommonModule, // Provides common Angular directives
    FormsModule   // Provides directives for template-driven forms
  ],
  templateUrl: './signin.component.html', // Link to the HTML template file
  styleUrls: ['./signin.component.scss'] // Link to the SCSS styles file
})
export class SigninComponent {
  // Properties to bind to the form inputs
  email = '';
  password = '';
  // Property to display error messages to the user
  errorMessage: string | null = null;

  // Inject the AuthService and Router services
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Handles the form submission for signing in an existing user.
   */
  async onSignIn(): Promise<void> {
    this.errorMessage = null; // Clear any previous error messages

    try {
      // Call the signIn method from the injected AuthService
      await this.authService.signIn(this.email, this.password);

      // If sign-in is successful, navigate the user to the home page
      console.log('Sign-in successful, navigating to home.');
      this.router.navigate(['/']);

    } catch (error: any) {
      // If an error occurs during sign-in, capture and display the error message
      console.error('Sign-in error:', error.message);
      this.errorMessage = error.message; // Display the error message to the user
    }
  }
}

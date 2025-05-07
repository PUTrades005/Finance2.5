import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AuthService } from '../auth.service'; // Import the authentication service
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] 
})
export class SignupComponent {
  email = '';
  password = '';
  errorMessage: string | null = null; // To display error messages

  constructor(private authService: AuthService, private router: Router) {}

  async onSignUp(): Promise<void> {
    this.errorMessage = null; // Clear previous errors
    try {
      await this.authService.signUp(this.email, this.password);
      // Redirect to a different page after successful sign-up (e.g., home or dashboard)
      this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = error.message; // Display the error message from the service
    }
  }
}

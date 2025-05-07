import { Injectable } from '@angular/core';
// Import necessary functions and types from AngularFire Auth
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs'; // Import Observable from rxjs

@Injectable({
  providedIn: 'root' // This makes the service a singleton available throughout the application
})
export class AuthService {

  // user$ is an Observable that emits the current authenticated user (or null if logged out)
  // You can subscribe to this observable in components to react to login/logout events
  user$: Observable<any>; // Using 'any' for simplicity, consider a proper User interface later

  // Inject the AngularFire Auth instance
  constructor(private auth: Auth) {
    // authState() returns an observable that provides the authentication state
    this.user$ = authState(this.auth);
  }

  /**
   * Registers a new user with email and password using Firebase Authentication.
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves upon successful user creation.
   */
  async signUp(email: string, password: string): Promise<void> {
    try {
      // Call the Firebase SDK function to create a user
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User signed up successfully:', userCredential.user);
      // You could return the userCredential or user object here if needed
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      throw error; // Re-throw the error for the component to handle
    }
  }

  /**
   * Logs in an existing user with email and password.
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves upon successful sign-in.
   */
  async signIn(email: string, password: string): Promise<void> {
    try {
      // Call the Firebase SDK function to sign in a user
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User signed in successfully:', userCredential.user);
      // You could return the userCredential or user object here if needed
    } catch (error: any) {
      console.error('Sign in error:', error.message);
      throw error; // Re-throw the error for the component to handle
    }
  }

  /**
   * Logs out the current user.
   * @returns A Promise that resolves upon successful sign-out.
   */
  async signOut(): Promise<void> {
    try {
      // Call the Firebase SDK function to sign out the current user
      await signOut(this.auth);
      console.log('User signed out successfully.');
    } catch (error: any) {
      console.error('Sign out error:', error.message);
      throw error; // Re-throw the error
    }
  }

  // You can add methods for other authentication providers (Google, GitHub, etc.) here later
}

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,authState } from '@angular/fire/auth';
import { from, Observable } from 'rxjs'; // Import from and Observable from rxjs

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class AuthService {

  // Observable to track the authentication state (logged in user or null)
  user$: Observable<any>; // Use 'any' for simplicity, you can define a User interface

  constructor(private auth: Auth) {
    // Use authState observable from AngularFire Auth to get the user's state
    this.user$ = authState(this.auth);
  }

  /**
   * Creates a new user with email and password.
   * @param email The user's email address.
   * @param password The user's password.
   * @returns A Promise that resolves when the user is created.
   */
  async signUp(email: string, password: string): Promise<void> {
    try {
      // Use Firebase Auth SDK function for creating user
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User signed up successfully:', userCredential.user);
      // You might want to return userCredential or handle success differently
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      throw error; // Re-throw the error to be handled by the component
    }
  }

  /**
   * Signs in an existing user with email and password.
   * @param email The user's email address.
   * @param password The user's password.
   * @returns A Promise that resolves when the user is signed in.
   */
  async signIn(email: string, password: string): Promise<void> {
    try {
      // Use Firebase Auth SDK function for signing in
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User signed in successfully:', userCredential.user);
      // You might want to return userCredential or handle success differently
    } catch (error: any) {
      console.error('Sign in error:', error.message);
      throw error; // Re-throw the error to be handled by the component
    }
  }

  /**
   * Signs out the current user.
   * @returns A Promise that resolves when the user is signed out.
   */
  async signOut(): Promise<void> {
    try {
      // Use Firebase Auth SDK function for signing out
      await signOut(this.auth);
      console.log('User signed out successfully.');
    } catch (error: any) {
      console.error('Sign out error:', error.message);
      throw error; // Re-throw the error
    }
  }

  // You can add other authentication methods here (Google, GitHub, etc.)
  // For example:
  // async googleSignIn(): Promise<void> { ... }
}

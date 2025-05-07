import { Component } from '@angular/core';
// ... other imports if any

@Component({
  selector: 'app-home', // The selector for your Home component
  standalone: true, // Or false, depending on how it was generated/set up
  imports: [], // Add imports if needed for this component
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // <-- Ensure this points to the .scss file
})
export class HomeComponent {
  // ... component logic
}

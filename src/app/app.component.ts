import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for common directives
import { RouterOutlet } from '@angular/router'; // Needed for <router-outlet>
import { RouterModule } from '@angular/router'; // Needed for routerLink directive

@Component({
  selector: 'app-root', // How you use this component in index.html
  standalone: true,     // This component is standalone
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule // Import RouterModule for routerLink
  ],
  templateUrl: './app.component.html', // Link to the template file
  styleUrls: ['./app.component.scss'] // Link to the style file (using scss)
})
export class AppComponent {
  title = 'finance2.5'; // Example property
  // Add other properties or methods for your root component here
}

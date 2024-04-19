import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-swim-frontend';
  isLoggedIn: boolean = true // Initialize isLoggedIn to false
  ngOnInit() {
    this.checkLogin(); // Call someMethod to check if user is logged in
  };
  constructor(private authService: AuthService) {} // Inject AuthService
  // Method to check if user is logged in
  checkLogin() {
   
    const token = localStorage.getItem('token');
    console.log("isLoggedIn "+this.isLoggedIn)
    if (token) {
     
      this.isLoggedIn = true;
      console.log(this.isLoggedIn)
    } else {
     
      this.isLoggedIn = false;
    }
  
    return this.isLoggedIn;
  }
}

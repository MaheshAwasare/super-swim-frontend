import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  title!: String;
  isCollapsed = true;
  isLoggedIn: boolean = false // Initialize isLoggedIn to false
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.checkLogin(); 
  };

  checkLogin() {
   
    const token = localStorage.getItem('token');
    if (token) {
     
      this.isLoggedIn = true;
      console.log("logged"+ this.isLoggedIn)
    } else {
     
      this.isLoggedIn = false;
    }
  
    return this.isLoggedIn;
  }

 
}

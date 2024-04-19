import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // User is authenticated, allow navigation
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false; 
    }
  }
}

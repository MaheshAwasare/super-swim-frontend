// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // Check if there is a valid token in local storage
    const token = localStorage.getItem('token');
    console.log("is Logged In called-->"+ token)
    return !!token; // Return true if token is present, false otherwise
  }
}

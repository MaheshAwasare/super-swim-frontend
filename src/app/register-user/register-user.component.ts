import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  userData: any = {
    name: '',
    address: '',
    mobileNo: '',
    medicalHistory: '',
    bloodGroup: '',
    familyDrName: '',
    familyDrMobileNo: '',
    registeredBy: ''
    // Add more properties as needed
  };

  constructor(private http: HttpClient) { }

  registerUser(userForm: NgForm) {
    this.http.post<any>('http://localhost:5000/users', this.userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Optionally, you can navigate to another page or show a success message
      },
      (error) => {
        console.error('Failed to register user:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}

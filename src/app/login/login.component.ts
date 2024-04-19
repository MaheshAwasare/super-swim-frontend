import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Variable to hold error message

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }
    const credentials = { username: this.username, password: this.password };
    if(this.username=='admin' && this.password==='1234'){
      localStorage.setItem('token', "1234");
      this.ngZone.run(() => {
        this.router.navigate(['/home',])
        .then(() => {
          window.location.reload();
        });
      });
    }
    /*this.http.post('https://gspapi.orangedesert-6e6d4111.eastus.azurecontainerapps.io/authenticate', credentials).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
      },
      (error: any) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Incorrect username or password';
      }
    );*/
  }
}

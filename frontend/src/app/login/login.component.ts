//still not set up
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {NgModel } from '@angular/forms';
//more protection for passwords
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // login(): void {
  //   this.authService.login(this.username, this.password).subscribe({
  //     next: (response) => {
  //       if (response.token) {  // assuming the response should have a token on success
  //         this.router.navigate(['/profile']);
  //       } else {
  //         alert('Authentication failed with no error message.');
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Login error:', error);
  //       alert('Login failed due to an error. Please check the console for more details.');
  //     }
  //   });
  // }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login response:', response);  // Add this to check what you receive
        if (response.user) {  // Assuming backend sends user data on success
          localStorage.setItem('username', this.username);
          this.router.navigate(['/profile']);
        } else {
          alert('Authentication failed with no error message.');
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        alert('Login failed due to an error. Please check the console for more details.');
      }
    });
  }
}


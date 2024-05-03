import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  username: string;
  showButtons: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      if (this.username) {
        // Hide buttons if username is present
        this.showButtons = false;
      }
    });

    // If coming back to the profile without a username in the URL,
    // check if there's a username stored (from the account creation)
    if (!this.username) {
      //getting username from localStorage
      this.username = localStorage.getItem('username');
      if (this.username) {
        // Hide buttons if username is fetched from storage
        this.showButtons = false;
      }
    }
  }

  //createUser
  goToCreateUser(): void {
    this.router.navigate(['/create-user']);
  }

  //login
  goToLogin(): void {
    this.router.navigate(['/login']);  // Make sure this path matches your route configuration
  }

  //logout
  logout(): void {
    localStorage.removeItem('username');  // Clear the stored username
    this.username = null;
    this.showButtons = true;  // Show buttons again
    this.router.navigate(['/']); // Optional: navigate to a different page after logout
  }
}

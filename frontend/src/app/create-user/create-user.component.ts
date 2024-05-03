import { Component } from '@angular/core';
import { CreateUser } from './create-user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  //currently its just expecting username and password
  user: User = {
    username: '',
    password: '',
  };

  // constructor(private createUser: CreateUser) {}
  constructor(private createUser: CreateUser, private router: Router) {}

  onCreate(): void {
    this.createUser.createUser(this.user)
    .subscribe({
      next: (res) => {
        console.log(res);
        //confirmation alert
        alert('Profile successfully created');
        //storing the username in localStorage so itll pass back to the profile page
        localStorage.setItem('username', res.username);
        //navigating back to profile
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('Error details:', err);
        alert('Error creating profile: ' + err.message);  // Show more detailed error
      }
    });

  }
}

import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  demoUser: User = {
    userID: "1508",
    username: "GenericUser258",
    password: "password123"
  }
}

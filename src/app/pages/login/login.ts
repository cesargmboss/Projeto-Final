import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [
    FormsModule,
  ]
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  submitLogin() {

  }
}
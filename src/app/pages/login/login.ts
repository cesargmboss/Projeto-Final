import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  onSubmit(): void {
    alert('A lógica de login seria implementada aqui.');
  }

  goBackToHome(): void {
    window.location.href = 'index.html';
  }
}
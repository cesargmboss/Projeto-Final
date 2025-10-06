import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <--- Importe o FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // Garanta que a flag esteja ativa
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [
    FormsModule, // <--- ADICIONE AQUI para habilitar o [(ngModel)]
    // Outros imports necessários, como NgIf ou CommonModule, se houver
  ]
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  submitLogin() {
    // ... sua lógica de login
  }
}
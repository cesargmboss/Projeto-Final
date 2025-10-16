import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  errorMessage: string | null = null;
  
  private readonly DUMMY_USER = {
    email: 'admin@ford.com',
    password: '123456'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService 
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.errorMessage = null;

    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === this.DUMMY_USER.email && password === this.DUMMY_USER.password) {
      this.authService.login();
      
      console.log('Login bem-sucedido! Redirecionando...');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'E-mail ou senha inválidos. Tente novamente.';
    }
  }

  goBackToHome(): void {
    this.router.navigate(['/home']);
  }
}
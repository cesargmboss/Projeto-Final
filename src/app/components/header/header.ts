import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- Importe o RouterLink
import { NgIf } from '@angular/common';       // <--- Importe o NgIf (para resolver *ngIf)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [
    RouterLink, // <--- ADICIONE AQUI
    NgIf,
    CommonModule  // <--- ADICIONE AQUI (para resolver o erro no *ngIf)
  ]
})
export class HeaderComponent {
  // Simulação de estado de login (usada no template com *ngIf)
  isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    console.log('Você saiu do sistema.');
    // Você pode injetar o Router aqui para navegar para a página inicial, se desejar.
    // Exemplo: this.router.navigate(['/']);
  }
}
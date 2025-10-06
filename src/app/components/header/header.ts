import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],

  imports: [
    RouterLink,
    NgIf,
    CommonModule
  ]
})
export class HeaderComponent {

  isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    console.log('Você saiu do sistema.');
  }
}
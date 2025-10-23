import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  public userData = {
    name: 'Nome do Usuário',
    email: 'admin@ford.com',
    status: 'Ativo',
    lastLogin: new Date().toLocaleString()
  };

  constructor() { }

  ngOnInit(): void {
    console.log('Dashboard carregado!');
  }
}
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';

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
export class HeaderComponent implements OnInit {
  public isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoginPage = this.router.url.includes('/login');

    this.router.events.subscribe(() => {
        this.isLoginPage = this.router.url.includes('/login');
    });
  }
}
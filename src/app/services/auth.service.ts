import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());

  isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor() { }

  private checkLoginStatus(): boolean {
    return !!sessionStorage.getItem('isLoggedIn');
  }

  login(): void {
    sessionStorage.setItem('isLoggedIn', 'true');
    this.loggedInSubject.next(true); 
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
    this.loggedInSubject.next(false);
  }
}
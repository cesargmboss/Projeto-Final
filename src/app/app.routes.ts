import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home') 
        .then(m => m.HomeComponent)
  },
  { 
    path: 'contato', 
    loadComponent: () => import('./pages/contato/contato') 
        .then(m => m.ContatoComponent)
  },
  { 
    path: 'lancamento', 
    loadComponent: () => import('./pages/lancamento/lancamento')
        .then(m => m.LancamentoComponent)
  },
  { 
    path: 'login',
    loadComponent: () => import('./pages/login/login')
        .then(m => m.LoginComponent)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

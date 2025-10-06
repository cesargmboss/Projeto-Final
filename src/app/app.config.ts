import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent, title: 'Ford | Início' },
  { path: 'modelos', component: HomeComponent, title: 'Ford | Modelos' },
  
{ 
    path: 'contato', 
    
    loadComponent: () => import('./pages/contato/contato').then(m => m.ContatoComponent),
    title: 'Página de Contato'
  },

  { 
    path: 'login', 
    
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent), 
    title: 'Ford | Login'
  },
  { 
    path: 'dashboard', 
    
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
    title: 'Ford | Dashboard'
  },

  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

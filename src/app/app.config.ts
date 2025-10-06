import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

// Componentes importados estaticamente para carregamento imediato (Home/Início)
import { HomeComponent } from './pages/home/home';

// Os componentes Login e Dashboard não precisam ser importados aqui se forem carregados dinamicamente (loadComponent)
// Assim, removemos:
// import { Login } from './pages/login/login'; 
// import { Dashboard } from './pages/dashboard/dashboard'; 

// 2. Definição das Rotas
const routes: Routes = [
  // Rotas que usam importação estática (carregamento imediato)
  { path: '', component: HomeComponent, title: 'Ford | Início' },
  { path: 'modelos', component: HomeComponent, title: 'Ford | Modelos' },
  
  // Rotas que usam Lazy-Loading (loadComponent) - Caminhos Corrigidos
  { 
    path: 'login', 
    // O caminho deve ser relativo ao 'app.config.ts' (que está em src/app/) até o arquivo login.ts
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent), 
    title: 'Ford | Login'
  },
  { 
    path: 'dashboard', 
    // O caminho deve ser relativo ao 'app.config.ts' até o arquivo dashboard.ts
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
    title: 'Ford | Dashboard'
  },
  
  // Rota curinga para redirecionar
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  // 3. Forneça as rotas usando provideRouter
  providers: [provideRouter(routes)],
};

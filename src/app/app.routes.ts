import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent }
];
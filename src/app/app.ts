import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // **IMPORTANTE**: O CommonModule deve ser importado se você usar *ngIf/*ngFor no template.
  // **IMPORTANTE**: O RouterOutlet é quem mostra o conteúdo da rota (Home).
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent], 
  template: `
    <!-- O componente Header é o primeiro a ser renderizado -->
    <app-header />
    
    <main class="min-h-[80vh]">
      <!-- O RouterOutlet é onde o conteúdo da Home, Login ou Dashboard aparece -->
      <router-outlet /> 
    </main>
    
    <!-- O componente Footer é o último a ser renderizado -->
    <app-footer />
  `,
  styleUrl: './app.css'
})
export class AppComponent { 
  // Remova a importação RouterLink se não for usado no template do AppComponent
  // Se você usar RouterLink apenas no Header, ele só precisa ser importado no Header.
}

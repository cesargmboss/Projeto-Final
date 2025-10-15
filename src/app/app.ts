import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent], 
  template: `
    
    <app-header />
    
    <main class="min-h-[80vh]">
      
      <router-outlet /> 
    </main>
    
    <app-footer />
  `,
  styleUrl: './app.css'
})
export class AppComponent { 

}

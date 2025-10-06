import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {
  // Define o ano atual dinamicamente para o aviso de direitos autorais
  currentYear: number = new Date().getFullYear();
}

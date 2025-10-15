import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class ContatoComponent {
  
  public isExpanded: boolean[] = [false, false, false];

  toggleAnswer(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
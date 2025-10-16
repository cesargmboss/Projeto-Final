import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CarroRecente {
  nome: string;
  subtitulo: string;
  imagemUrl: string; 
  linkDetalhes: string;
}

@Component({
  selector: 'app-lancamento',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './lancamento.html',
  styleUrls: ['./lancamento.css']
})
export class LancamentoComponent implements OnInit {

  youtubeVideoId: string = 'i90oU6sY92c'; 
  trailerUrl!: SafeResourceUrl; 

  carrosRecentes: CarroRecente[] = [
    { nome: 'F-150 Lightning', subtitulo: 'A picape icônica, agora elétrica.', imagemUrl: 'assets/f150-lightning.png', linkDetalhes: '#' },
    { nome: 'Bronco Raptor', subtitulo: 'O off-road extremo com DNA Raptor.', imagemUrl: 'assets/bronco-raptor.png', linkDetalhes: '#' },
    { nome: 'Territory 2024', subtitulo: 'SUV conectado, refeito para o conforto.', imagemUrl: 'assets/territory.png', linkDetalhes: '#' },
    { nome: 'Mustang Dark Horse', subtitulo: 'Performance de pista, pronta para a rua.', imagemUrl: 'assets/mustang-dark-horse.png', linkDetalhes: '#' },
    { nome: 'Explorer EV', subtitulo: 'O SUV elétrico feito para a Europa.', imagemUrl: 'assets/explorer-ev.png', linkDetalhes: '#' },
  ];

  comparacaoModelos = [
    {
      titulo: 'Maverick (Recente)',
      dados: { potencia: '250 hp', consumo: '12 km/l', seguranca: '5 Estrelas (ANCAP)' },
      imagemUrl: 'assets/maverick-recente.png'
    },
    {
      titulo: 'Corcel II (Clássico)',
      dados: { potencia: '73 hp', consumo: '8 km/l', seguranca: 'Não Avaliado' },
      imagemUrl: 'assets/corcel2-antigo.png'
    }
  ];

  comparacaoAtiva: number = 0; 
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const url = `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=0&rel=0&modestbranding=1`;
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  alternarComparacao(indice: number): void {
    this.comparacaoAtiva = indice;
  }

  scrollCarrossel(direction: 'left' | 'right'): void {
    if (this.carrosRecentes.length === 0) return;

    if (direction === 'right') {
      const firstCar = this.carrosRecentes.shift();
      if (firstCar) {
        this.carrosRecentes.push(firstCar);
      }
    } else {
      const lastCar = this.carrosRecentes.pop();
      if (lastCar) {
        this.carrosRecentes.unshift(lastCar);
      }
    }
    this.carrosRecentes = [...this.carrosRecentes];
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CarroDestaque {
  nome: string;
  descricao: string;
  imagemUrl: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  modelosDestaque: CarroDestaque[] = [
    {
      nome: 'Ford Mustang Mach-E',
      descricao: 'O futuro da performance. 100% elétrico, 100% Mustang.',
      imagemUrl: 'assets/mustang-mach-e.jpg',
      link: '/lancamento/mach-e'
    },
    {
      nome: 'Nova Ford Ranger',
      descricao: 'Raça forte. Totalmente redesenhada para qualquer desafio.',
      imagemUrl: 'assets/ranger.jpg',
      link: '/lancamento/ranger'
    },
    {
      nome: 'Ford Bronco Sport',
      descricao: 'Construído para a aventura, com tecnologia e tração 4x4.',
      imagemUrl: 'assets/bronco-sport.jpg',
      link: '/lancamento/bronco'
    }
  ];

  noticias = [
    { titulo: 'Ford Anuncia Investimento em Baterias de Estado Sólido', data: '12/10/2025', link: '#' },
    { titulo: 'A História dos 60 Anos do Mustang', data: '05/10/2025', link: '#' },
    { titulo: 'Segurança Máxima: Ranger Recebe 5 Estrelas no Latin NCAP', data: '28/09/2025', link: '#' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
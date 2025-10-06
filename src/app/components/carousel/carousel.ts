import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // <--- Importe o NgFor

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  imports: [NgFor] // <--- Adicione aqui
})
// ...
export class CarouselComponent {
  slides = [
    {
      image: 'assets/mustang.jpg', // Adicione imagens fictícias ou reais
      caption: 'Novo Mustang GT',
      description: 'Potência e design lendários.',
    },
    {
      image: 'assets/ranger.jpg',
      caption: 'Ford Ranger Nova Geração',
      description: 'Robustez e tecnologia para qualquer desafio.',
    },
    {
      image: 'assets/bronco.jpg',
      caption: 'Ford Bronco Sport',
      description: 'Aventura espera por você.',
    },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? this.slides.length - 1
        : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slides.length - 1
        ? 0
        : this.currentSlide + 1;
  }
}
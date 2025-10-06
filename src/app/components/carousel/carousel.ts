import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  imports: [NgFor]
})

export class CarouselComponent {
  slides = [
    {
      image: 'assets/mustang.jpg',
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
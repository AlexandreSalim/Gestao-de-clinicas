import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss'] 
})
export class TestesComponent {

  slides = [
    { id: 1, image: 'assets/img1.jpg', title: 'Slide 1' },
    { id: 2, image: 'assets/img2.jpg', title: 'Slide 2' },
    { id: 3, image: 'assets/img3.jpg', title: 'Slide 3' }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Troca de slide a cada 5 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpa o intervalo quando o componente for destruído
  }
}

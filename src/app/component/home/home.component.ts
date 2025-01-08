import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  carouselItems = [
    { name: 'Limpeza doméstica', image: 'cleaning_services.png' },
    { name: 'Reformas e reparos', image: 'handyman.png' },
    { name: 'Instalações elétricas', image: 'electrical_services.png' },
    { name: 'Instalações hidráulicas', image: 'shower.png' },
    { name: 'Montagem de móveis', image: 'tools_power_drill.png' },
    { name: 'Serviços de jardinagem', image: 'deceased.png' },
  ];
  activeIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Certifique-se de que não há código que afete a exibição da imagem
  }

  login() {
    // Implement login logic here
    console.log('Login button clicked');
  }

  showAlert() {
    this.router
      .navigate(['/login'])
      .then(() => {
        console.log('Navegação para login bem-sucedida');
      })
      .catch((err) => {
        console.error('Erro na navegação:', err);
      });
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
    this.scrollToActiveItem();
  }

  scrollToActiveItem() {
    const carouselElement = this.carousel.nativeElement;
    const activeItem = carouselElement.children[this.activeIndex];
    carouselElement.scrollLeft =
      activeItem.offsetLeft - carouselElement.offsetLeft;
  }
}

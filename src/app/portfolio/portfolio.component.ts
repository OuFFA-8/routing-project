import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  image:any=""

  images = [
    { src: "/images/portfolio/poert1.png" },
    { src: "/images/portfolio/port2.png" },
    { src: "/images/portfolio/port3.png" },
    { src: "/images/portfolio/poert1.png" },
    { src: "/images/portfolio/port2.png" },
    { src: "/images/portfolio/port3.png" }
  ]
  mymethod(hamada: any): void {
    this.image=hamada
  }

}

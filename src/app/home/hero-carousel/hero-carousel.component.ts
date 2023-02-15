import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
})
export class HerocarouselComponent {
  activeQuote = 1;

  quotesArray = [
    {
      quote: '"People who love to eat are always the best people."',
      author: 'Julia Child',
      id: 1,
    },
    {
      quote:
        '"If you really want to make a friend, go to someone`s house and eat with him... The people who give you their food give you their heart."',
      author: 'Cesar Chavez',
      id: 2,
    },
    {
      quote:
        '"Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together."',
      author: 'Guy Fieri',
      id: 3,
    },
    {
      quote: '"Classic or modern there is only one cuisine the good."',
      author: 'Paul Bocuse French chef',
      id: 4,
    },
  ];

  onForward() {
    if (this.activeQuote === this.quotesArray.length) {
      this.activeQuote = 1;
    } else this.activeQuote++;
  }

  onBackward() {
    if (this.activeQuote === 1) {
      this.activeQuote = this.quotesArray.length;
    } else this.activeQuote--;
  }
}

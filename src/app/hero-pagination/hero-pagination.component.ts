import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-pagination',
  templateUrl: './hero-pagination.component.html',
  styleUrls: ['./hero-pagination.component.scss'],
})
export class HeroPaginationComponent {
  quotes = {
    quote: '"People who love to eat are always the best people."',
    author: 'Julia Child',
    id: 1,
  };

  array = [
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
    if (this.quotes.id === this.array.length) {
      this.quotes = this.array[0];
    } else {
      this.quotes = this.array[this.quotes.id];
    }
  }

  onBackward() {
    if (this.quotes.id === 1) {
      this.quotes = this.array[this.array.length - 1];
    } else {
      this.quotes = this.array[this.quotes.id - 2];
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public events = [
    {
      title: 'Journey of Taste',
      text: 'Indulge in our exquisite 6-course degustation menu, perfectly paired with fine wines for a truly elegant dining experience.',
      price: 'NOK 2000',
    },

    {
      title: 'Blossom into Spring',
      text: 'Awaken your senses with our seasonal 10-course spring menu, crafted with fresh, vibrant flavors.',
      price: 'NOK 2500',
    },

    {
      title: 'Savor the Romance',
      text: "Experience romance and fine dining with our Valentine's Day 4 course menu, crafted to delight the senses.",
      price: 'NOK 1750',
    },
  ];
}

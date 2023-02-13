import { Component } from '@angular/core';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss'],
})
export class EventsSectionComponent {
  events = [
    {
      title: '6 course degustive menu',
      text: 'Savor each carefully crafted dish as it takes you on a journey through a symphony of flavors, textures, and aromas. Our menu, a harmonious blend of tradition and modernity, showcases the finest seasonal ingredients, carefully selected to create a truly unforgettable dining experience. Book your table now.',
    },
  ];
}

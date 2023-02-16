import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  appetizerCourses = [
    {
      name: 'Crispy Octopus',
      ingredients: [
        'confit potatoes',
        'pearl onions',
        'blistered shishitos',
        'cotija',
        'creamy salsa verde',
        'almond corn purée',
      ],
    },
    {
      name: 'Poutine',
      ingredients: ['tomato biscuit', ' marinated tomatoes', 'pesto purée'],
    },
    {
      name: 'Roasted Beets',
      ingredients: [
        'beet gazpacho',
        'strawberries',
        'green goddess',
        'whipped strawberry boursin',
      ],
    },
    {
      name: 'Garlic Noodles',
      ingredients: ['mushrooms', 'scallions', 'parmesan'],
    },
  ];

  entreeCourses = [
    {
      name: 'Shrimp & Lobster Roll',
      ingredients: ['lemon aioli ', 'celery', 'chili flakes', 'green onions'],
    },
    {
      name: 'Fettuccine',
      ingredients: ['black beans', ' corn', 'romesco sauce'],
    },
    {
      name: 'Blackened Salmon',
      ingredients: [
        'confit potatoes ',
        'blistered shishitos',
        'green seaweed',
        'fermented salsify',
      ],
    },
    {
      name: 'Grilled Venison',
      ingredients: [
        'artichoke puree',
        'blackberry sauce',
        'caramellized carrot',
      ],
    },
    {
      name: 'Nordic Sunburst Salad',
      ingredients: [
        'dried cherries',
        'cucumber',
        'spicy cinnamon vinaigrette',
        'gorgonzola cheese',
        'organic mixed greens',
      ],
    },
  ];

  dessertCourses = [
    {
      name: 'Bondepiker',
      ingredients: ['apple', 'cream', 'walnut crumble', 'caramell sauce'],
    },
    {
      name: 'Success tart',
      ingredients: [
        'crunched almond',
        'egg cream liqueur',
        'chocolate',
        'fermented orange',
      ],
    },
    {
      name: 'Sweet temptations',
      ingredients: [
        'butter cream ',
        'strawberry chutney',
        'youghurt',
        'pistachio sponge',
      ],
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  appetizerCourses = [
    {
      name: 'something',
      ingredients: ['onion', 'caramell', 'pear'],
    },
    {
      name: 'something2',
      ingredients: ['oasdasdas', 'caramell', 'pear'],
    },
    {
      name: 'something different',
      ingredients: [
        'onion',
        'caraasdasdasell',
        'peaasdasdassar',
        'more something',
      ],
    },
    {
      name: 'something else',
      ingredients: ['bread', 'turkey', 'tmato'],
    },
  ];
}

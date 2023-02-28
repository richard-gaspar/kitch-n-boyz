import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  public staffArray = [
    {
      name: 'Mikael Anderson',
      jobTitle: 'Executive Chef',
      imageUrl: 'assets/images/staff/mikael.jpg',
    },
    {
      name: 'Vilhelm Eirik',
      jobTitle: 'Sous Chef',
      imageUrl: 'assets/images/staff/vilhelm.jpg',
    },
    {
      name: 'Karl Hallvard',
      jobTitle: 'Director of Operations',
      imageUrl: 'assets/images/staff/karl.jpg',
    },
    {
      name: 'Milly Tonje',
      jobTitle: 'Director of Sales',
      imageUrl: 'assets/images/staff/milly.jpg',
    },
    {
      name: 'Dorthea Karin',
      jobTitle: 'Events Director',
      imageUrl: 'assets/images/staff/dorthea.jpg',
    },
    {
      name: 'Lucas Filip',
      jobTitle: 'Lead Bartender',
      imageUrl: 'assets/images/staff/lucas.jpg',
    },
    {
      name: 'Sølvi Nanna',
      jobTitle: 'Director of Hospitality',
      imageUrl: 'assets/images/staff/solvi.jpg',
    },
    {
      name: 'Hallstein Olve',
      jobTitle: 'Sommelier',
      imageUrl: 'assets/images/staff/hallstein.jpg',
    },
  ];
}

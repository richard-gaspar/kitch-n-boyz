import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  photos = [
    { url: 'assets/images/gallery/food-0.jpg' },
    { url: 'assets/images/gallery/food-1.jpg' },
    { url: 'assets/images/gallery/food-2.jpg' },
    { url: 'assets/images/gallery/food-3.jpg' },
    { url: 'assets/images/gallery/food-4.jpg' },
    { url: 'assets/images/gallery/food-5.jpg' },
    { url: 'assets/images/gallery/food-6.jpg' },
    { url: 'assets/images/gallery/food-7.jpg' },
    { url: 'assets/images/gallery/food-8.jpg' },
    { url: 'assets/images/gallery/food-9.jpg' },
    { url: 'assets/images/gallery/food-10.jpg' },
    { url: 'assets/images/gallery/food-11.jpg' },
    { url: 'assets/images/gallery/food-12.jpg' },
  ];
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationService } from 'src/services/animation.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements AfterViewInit {
  @ViewChildren('img') images!: QueryList<ElementRef>;
  @ViewChildren('text') texts!: QueryList<ElementRef>;
  @ViewChildren('video') videos!: QueryList<ElementRef>;

  public historyArray = [
    {
      text: "Mikaeal Anderson was born an raised in Norway, surrounded by the rich and varied flavors of the country's seafood and produce. From a young age, Mikael showed a talent for cooking, and he pursued his passion at culinary school ",
      imageUrl: 'assets/images/mikael/photo1.jpg',
    },
    {
      text: 'After working in several top restaurants in Norway and Europe, Mikael determined to create a restaurant that showcased the best of Norwegian ingredients and flavors, while also incorporating his own contemporary ideas and techniques.',
      imageUrl: 'assets/images/mikael/photo2.jpg',
    },
    {
      text: `In the early 2010s, Mikael opened his restaurant in Oslo, called "Kitch'N Boyz". The menu was built around the freshest seafood and produce, and Mikael was committed to sourcing ingredients from local fishermen and farmers.`,
      imageUrl: 'assets/images/mikael/photo4.jpg',
    },
    {
      text: `Today, Kitch'N Boyz is considered one of the premier dining destinations in Norway, and Mikael is widely regarded as one of the leading lights of the Norwegian culinary scene.`,
      imageUrl: 'assets/images/mikael/photo3.jpg',
    },
  ];

  constructor(private animation: AnimationService) {}

  ngAfterViewInit(): void {
    this.images.forEach((img) => {
      this.animation.observeElement(img.nativeElement);
    });

    this.texts.forEach((text) => {
      this.animation.observeElement(text.nativeElement);
    });

    this.videos.forEach((video) => {
      this.animation.observeElement(video.nativeElement);
    });
  }
}

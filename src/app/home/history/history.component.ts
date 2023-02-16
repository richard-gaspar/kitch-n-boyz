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

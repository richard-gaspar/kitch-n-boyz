import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements AfterViewInit {
  @ViewChildren('img') images!: QueryList<ElementRef>;
  @ViewChildren('text') texts!: QueryList<ElementRef>;
  @ViewChildren('video') videos!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.images.forEach((img) => {
      this.observeElement(img.nativeElement);
    });

    this.texts.forEach((text) => {
      this.observeElement(text.nativeElement);
    });

    this.videos.forEach((video) => {
      this.observeElement(video.nativeElement);
    });
  }

  private observeElement(el: any) {
    // Observe each image individually and animate its opacity when it comes into view
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.nodeName === 'P') {
            entry.target.classList.add('in-view-from-top');
          } else {
            entry.target.classList.add('in-view-from-bottom');
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(el);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  public observer!: IntersectionObserver;

  constructor() {}

  public observeElement(el: any) {
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
          }

          if (
            entry.target.nodeName === 'IMG' ||
            entry.target.nodeName === 'VIDEO'
          ) {
            entry.target.classList.add('in-view-from-bottom');
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(el);
  }
}

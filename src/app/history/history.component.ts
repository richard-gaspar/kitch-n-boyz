import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  photoFadeUp: boolean = false;

  // input = document.querySelector('#photo-2') as HTMLInputElement | null;

  @HostListener('document:scroll')
  onScroll() {
    if (document.documentElement.scrollTop > 1200) {
      this.photoFadeUp = true;
    }
  }
}

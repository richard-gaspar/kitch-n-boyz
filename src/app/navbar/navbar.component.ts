import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuOpen = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  toEvents() {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  hamburgerMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen;
  }

  disableMenu() {
    this.hamburgerMenuOpen = false;
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  toEvents() {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  }
}

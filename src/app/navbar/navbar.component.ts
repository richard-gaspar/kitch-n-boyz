import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  hamburgerMenuOpen = false;

  constructor(private router: Router) {}

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

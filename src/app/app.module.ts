import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerocarouselComponent } from './hero-carousel/hero-carousel.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HerocarouselComponent, HistoryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

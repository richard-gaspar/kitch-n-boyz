import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerocarouselComponent } from './home/hero-carousel/hero-carousel.component';
import { HistoryComponent } from './home/history/history.component';
import { EventsSectionComponent } from './home/events-section/events-section.component';
import { CardComponent } from './home/events-section/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerocarouselComponent,
    HistoryComponent,
    EventsSectionComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

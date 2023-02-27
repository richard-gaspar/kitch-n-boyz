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
import { MenuComponent } from './menu/menu.component';
import { StaffComponent } from './staff/staff.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  ionLogoFacebook,
  ionLogoTwitter,
  ionLogoInstagram,
  ionLogoTiktok,
} from '@ng-icons/ionicons';

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
    MenuComponent,
    StaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      ionLogoFacebook,
      ionLogoTwitter,
      ionLogoInstagram,
      ionLogoTiktok,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

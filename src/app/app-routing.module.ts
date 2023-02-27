import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

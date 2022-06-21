import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ConfigComponent } from './config/config.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent},
   {path: 'cart', component: CartComponent},
   {path: 'gallery', component: GalleryComponent},
   {path: 'config', component: ConfigComponent},
   {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

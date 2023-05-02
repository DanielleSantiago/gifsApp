import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifsSearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    GifsSearchBoxComponent,
    HomePageComponent,
    GifsCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }

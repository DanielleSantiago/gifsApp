import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}

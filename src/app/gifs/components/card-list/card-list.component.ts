import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export class GifsCardListComponent {

  @Input() public gifs: Gif[] = [];

}
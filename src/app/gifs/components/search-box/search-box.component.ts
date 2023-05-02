import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class GifsSearchBoxComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {

  }
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.searchTag( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}

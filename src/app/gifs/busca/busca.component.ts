import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
})
export class BuscaComponent {
  
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {

  }
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historico: string[] = [];

  get historico() {
    return [...this._historico];
  }

  buscarGifs( query: string) {
    this._historico.unshift( query );

    console.log(this._historico);
  }
}

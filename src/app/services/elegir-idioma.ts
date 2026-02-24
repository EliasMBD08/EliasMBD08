import { Injectable, signal } from '@angular/core';
import { data } from '../data/dataPortafolio';
import { Data, DataLanguageSection } from '../interfaces/dataLanguageSection';

@Injectable({
  providedIn: 'root',
})
export class ElegirIdioma {
  datos = signal<DataLanguageSection>(data.spanish);

  cambiarIdioma(code: number) {
    if (code === 2) {
      this.datos.set(data?.spanish);
    } else {
      this.datos.set(data?.english);
    }
  }
}

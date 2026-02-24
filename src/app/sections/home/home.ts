import { Component, computed, inject } from '@angular/core';
import { ElegirIdioma } from '../../services/elegir-idioma';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dataService = inject(ElegirIdioma);

  resume = computed(() => this.dataService.datos()?.resume);
}

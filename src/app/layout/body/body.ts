import { Component, computed, inject } from '@angular/core';
import { ElegirIdioma } from '../../services/elegir-idioma';
import { Home } from '../../sections/home/home';
import { Projects } from '../../sections/projects/projects';
import { Curriculum } from '../../sections/curriculum/curriculum';

@Component({
  selector: 'app-body',
  imports: [Home, Projects, Curriculum],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  private dataService = inject(ElegirIdioma);

  sections = computed(() => this.dataService.datos().sidebar);
}

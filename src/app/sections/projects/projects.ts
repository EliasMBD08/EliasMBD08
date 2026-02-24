import { Component, computed, inject } from '@angular/core';
import { ElegirIdioma } from '../../services/elegir-idioma';
import { CardProject } from '../../components/card-project/card-project';
import { SectionTitle } from '../../components/section-title/section-title';

@Component({
  selector: 'app-projects',
  imports: [CardProject, SectionTitle],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private dataService = inject(ElegirIdioma);

  projects = computed(() => this.dataService.datos()?.projects);
}

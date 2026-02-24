import { Component, computed, inject } from '@angular/core';
import { ElegirIdioma } from '../../services/elegir-idioma';
import { TimelineModule } from 'primeng/timeline';
import { SectionTitle } from '../../components/section-title/section-title';
import { ExperienceDetail } from '../../components/experience-detail/experience-detail';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-curriculum',
  imports: [TimelineModule, SectionTitle, ExperienceDetail, TooltipModule],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.css',
})
export class Curriculum {
  private dataService = inject(ElegirIdioma);

  buttons = computed(() => this.dataService.datos()?.buttons);
  profile = computed(() => this.dataService.datos()?.curriculum.perfil);
  academicExperiences = computed(() => this.dataService.datos()?.curriculum.education);
  workExperiences = computed(() => this.dataService.datos()?.curriculum.experiences);
}

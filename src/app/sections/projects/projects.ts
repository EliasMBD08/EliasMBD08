import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { CardProject } from '../../components/card-project/card-project';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { projects } from '../../data/dataPortafolio';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardProject, SectionHeading],
  templateUrl: './projects.html',
})
export class Projects {
  protected i18n = inject(I18nService);
  protected items = projects;

  protected t = computed(() => this.i18n.t());
}
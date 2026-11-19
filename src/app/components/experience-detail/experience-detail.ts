import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ExperienceItem } from '../../data/experience.types';
import { Tag } from '../../shared/ui/tag/tag';

@Component({
  selector: 'app-experience-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tag],
  templateUrl: './experience-detail.html',
})
export class ExperienceDetail {
  experience = input.required<ExperienceItem>();
  lineVisible = input<boolean>(true);
}

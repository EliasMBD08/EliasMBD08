import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ExperienceItem } from '../../data/experience.types';

@Component({
  selector: 'app-experience-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './experience-detail.html',
})
export class ExperienceDetail {
  experience = input.required<ExperienceItem>();
  lineVisible = input<boolean>(true);
}
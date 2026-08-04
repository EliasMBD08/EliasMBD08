import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../data/dataPortafolio';
import { Tag } from '../../shared/ui/tag/tag';

@Component({
  selector: 'app-card-project',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tag],
  templateUrl: './card-project.html',
})
export class CardProject {
  project = input.required<Project>();
}
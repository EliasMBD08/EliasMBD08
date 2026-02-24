import { Component, input } from '@angular/core';
import { Education } from '../../interfaces/education';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience-detail',
  imports: [],
  templateUrl: './experience-detail.html',
  styleUrl: './experience-detail.css',
})
export class ExperienceDetail {
  experience = input.required<Education | Experience>();
  lineVisible = input<boolean>(true);
}

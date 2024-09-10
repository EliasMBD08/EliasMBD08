import { Component, Input } from '@angular/core';

interface Experience {
  title?: string,
  subtitle?: string,
  desc?: string
}

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent {
  @Input() experience!: Experience;
  @Input() lineVisible?: boolean = true;
}

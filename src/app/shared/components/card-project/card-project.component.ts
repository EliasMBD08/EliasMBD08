import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface Project {
  image: string,
  title: string,
  desc: string,
  link: string
}

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() project!: Project;
}

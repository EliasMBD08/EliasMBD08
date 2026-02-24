import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.html',
  styleUrl: './card-project.css',
})
export class CardProject {
  project = input.required<Project>();
}

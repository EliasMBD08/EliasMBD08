import { Component } from '@angular/core';
import { HomeComponent } from '../../sections/home/home.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { CurriculumComponent } from '../../sections/curriculum/curriculum.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HomeComponent, ProjectsComponent, CurriculumComponent, ContactComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}

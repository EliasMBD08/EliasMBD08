import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Home } from '../../sections/home/home';
import { Projects } from '../../sections/projects/projects';
import { Curriculum } from '../../sections/curriculum/curriculum';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Home, Projects, Curriculum, Contact],
  templateUrl: './body.html',
})
export class Body {}
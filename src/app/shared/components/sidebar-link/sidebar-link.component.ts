import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Section {
  title: string;
  linkto: string; // Corrige el nombre de la propiedad aquí
}

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss'
})
export class SidebarLinkComponent {

  @Input() section?: Section;

}

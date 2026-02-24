import { Component, input } from '@angular/core';
import { Section } from '../../interfaces/section';

@Component({
  selector: 'app-sidebar-link',
  imports: [],
  templateUrl: './sidebar-link.html',
  styleUrl: './sidebar-link.css',
})
export class SidebarLink {
  section = input.required<Section>();
}

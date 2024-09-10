import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [ImageModule, SidebarLinkComponent],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {
  sections = [
    {title: "Home", linkto: "home"},
    {title: "Projects", linkto: "projects"},
    {title: "CV", linkto: "cv"},
    // {title: "Contact", linkto: "contact"},
  ]
}

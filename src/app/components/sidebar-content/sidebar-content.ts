import { Component, computed, inject } from '@angular/core';
import { ElegirIdioma } from '../../services/elegir-idioma';
import { SidebarLink } from '../sidebar-link/sidebar-link';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-sidebar-content',
  imports: [SidebarLink, ImageModule],
  templateUrl: './sidebar-content.html',
  styleUrl: './sidebar-content.css',
})
export class SidebarContent {
  private dataService = inject(ElegirIdioma);

  sections = computed(() => this.dataService.datos()?.sidebar);
}

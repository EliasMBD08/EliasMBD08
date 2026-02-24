import { Component, computed, inject } from '@angular/core';
import { SidebarVisibilityService } from '../../services/sidebar-visibility';
import { ElegirIdioma } from '../../services/elegir-idioma';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private sidebarVisibilityService = inject(SidebarVisibilityService);
  private dataService = inject(ElegirIdioma);

  iconLanguage = computed(() => this.dataService.datos()?.iconLanguage);

  doVisible() {
    this.sidebarVisibilityService.visibility.set(true);
  }

  toggleLanguage(code: number) {
    this.dataService.cambiarIdioma(code);
  }
}

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SidebarVisibilityService } from '../../services/sidebar-visibility';
import { I18nService } from '../../i18n/i18n.service';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  protected sidebar = inject(SidebarVisibilityService);
  protected i18n = inject(I18nService);
  protected theme = inject(ThemeService);

  protected t = computed(() => this.i18n.t());

  protected openDrawer(): void {
    this.sidebar.visibility.set(true);
  }

  protected toggleLang(): void {
    this.i18n.toggle();
  }

  protected toggleTheme(): void {
    this.theme.toggle();
  }

  protected nextLangLabel(): string {
    return this.i18n.lang() === 'es' ? 'English' : 'Español';
  }
}
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarVisibilityService } from '../../services/sidebar-visibility';
import { Drawer } from '../../shared/ui/drawer/drawer';
import { SidebarContent } from '../../components/sidebar-content/sidebar-content';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Drawer, SidebarContent],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  private sidebar = inject(SidebarVisibilityService);
  protected visibility = this.sidebar.visibility;
  private i18n = inject(I18nService);

  protected close(): void {
    this.sidebar.visibility.set(false);
  }

  protected drawerTitle(): string {
    return this.i18n.lang() === 'es' ? 'Menú' : 'Menu';
  }
}
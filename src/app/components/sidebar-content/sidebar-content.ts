import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SidebarLink } from '../sidebar-link/sidebar-link';
import { sidebarItems, profile } from '../../data/dataPortafolio';

@Component({
  selector: 'app-sidebar-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidebarLink],
  templateUrl: './sidebar-content.html',
})
export class SidebarContent {
  protected i18n = inject(I18nService);
  protected profile = profile;

  /** Los títulos se resuelven desde i18n para respetar el idioma activo. */
  protected items = computed(() => {
    const nav = this.i18n.t().nav;
    return sidebarItems.map((item) => ({
      title: nav[item.titleKey],
      linkto: item.linkto,
    }));
  });
}
